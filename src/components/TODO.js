import React, { Component } from 'react'

import store from '../store'

import TODOUI from '../views/TODO'
import {getDelItem ,getAddItem,getChangeValue,initLists} from '../store/actionCreate'
export default class TODO extends Component {
   constructor(props){
       super(props)
       this.state=store.getState()
       //需要同时订阅store才可以同时修改视图
      
       this.changeHandler=this.changeHandler.bind(this)
       this.keyUpHandler=this.keyUpHandler.bind(this)
       this.addHandler=this.addHandler.bind(this)
       this.storeHandler=this.storeHandler.bind(this)
       this.delHandler=this.delHandler.bind(this)
       store.subscribe(this.storeHandler) 
   }
   //输入框的内容改变时
   changeHandler(event){
    let action = getChangeValue(event.target.value);
    store.dispatch(action)
   }
   keyUpHandler(event){
    let code = event.keyCode
    if(code === 13){
        this.addHandler()
    }

   }
//    当点击了添加按钮即可添加一个TODO item
    addHandler(){
    let action =getAddItem();
    store.dispatch(action)
   }

   storeHandler(){
    // 当store里的数据发生改变时重新获取数据
    this.setState(store.getState())
   }

    //点击删除时删除所选项
    delHandler(index){
        console.log(index);
        let action =getDelItem(index);
        store.dispatch(action)
    }
    render() {
    return (
        
        <TODOUI 
                inputValue = {this.state.inputValue}
                list={this.state.list}
                keyUpHandler={this.keyUpHandler}
                changeHandler={this.changeHandler}
                delHandler={this.delHandler}
                addHandler={this.addHandler}
                />
        
    )
    }

   componentDidMount(){ 
      const action = initLists();
      store.dispatch(action);
   }
}
