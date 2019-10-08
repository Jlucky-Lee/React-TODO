import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actions'
const defaultState = {
    inputValue:'123',
    list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',]
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


    default: return state;
}

}