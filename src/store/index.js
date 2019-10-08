import {createStore} from 'redux'
import reducer from './reducer'
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //这句话的意思是如果有redux的调试工具则在里面进行调试
);
export default  store