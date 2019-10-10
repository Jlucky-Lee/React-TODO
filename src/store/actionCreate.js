// 创建动作
import {INIT_TODO_LIST,DELETE_TODO_ITEM,ADD_TODO_ITEM,CHANGE_INPUT_VALUE,INIT_LIST} from './actions'
import axios from 'axios'
export const getDelItem = (index) =>({
    type:DELETE_TODO_ITEM,
    index
})

 export const getAddItem = () =>({
    type:ADD_TODO_ITEM
})

export const getInitList = (list) =>({
    type:INIT_TODO_LIST,
    list
})
export const getChangeValue = (value) =>({
    type : CHANGE_INPUT_VALUE,
    value
})

export const initLists = () =>({
    type: INIT_LIST
})
// 使用redux-saga来完成异步请求


// 使用redux-thunk中间件完成异步请求
// export const getAsyncList = () =>{
//     return (dispatch) =>{
        
//         axios.get("https://movie.52kfw.cn/index.php/Api/Movie/alst?page=1&size=5").then(res =>{
//         console.log(res.data.result);

//         var list=[]
//         res.data.result.forEach(item =>{
//             list.push(item.title);
//         });

//         const action =getInitList(list);
//         console.log(action);
//         dispatch(action);
        
//         })
       
//     }
    
// }

