import {put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import {INIT_LIST} from './actions'
import {getInitList} from './actionCreate'
function* initList(){
    // 发异步请求
    // 在这里使用generator异步请求可能会失败，在这里我们需要对错误进行处理
    try {
    var res =yield axios.get("https://movie.52kfw.cn/index.php/Api/Movie/alst?page=1&size=5");
    
    // 在saga中吧数据推给store使用put操作
    let list =[];
    res.data.result.forEach(item =>{
        list.push(item.title);
    })
    
    const action =getInitList(list);
    yield put(action);

    } catch (error) {
        console.log('服务器繁忙，请稍后重试......');
        
    }
    
    
}
// 使用saga导出的函数必须是generator
function* mySaga() {
    // 截获所有 action 的type的值为 INIT_LIST的请求，之后就执行 initList 函数
    yield takeEvery(INIT_LIST, initList);
}
  
  export default mySaga;