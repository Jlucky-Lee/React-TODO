import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_TODO_LIST} from './actions'
const defaultState = {
    inputValue:'',
    list: []
}

export default (state = defaultState, action) =>{

//在redux中state只可以接受数据，但是不可以被改变，所以需要先拷贝，再重新赋值 
//  根据借书人的借阅单在记录本中查找相应的数据
switch(action.type){

    case CHANGE_INPUT_VALUE:
    var newState =JSON.parse(JSON.stringify(state)); //对state进行深拷贝
    newState.inputValue = action.value;
    return newState;

    case ADD_TODO_ITEM:
    var newState =JSON.parse(JSON.stringify(state)); //对state进行深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue=""
    return newState;

    case DELETE_TODO_ITEM:
    var newState =JSON.parse(JSON.stringify(state)); //对state进行深拷贝
    newState.list.splice(action.index,1);
    return newState;

    case INIT_TODO_LIST:   
    var newState =JSON.parse(JSON.stringify(state)); //对state进行深拷贝
    console.log(action,'haha');
    
    newState.list = action.list;

    return newState;


    default: return state;
}

}