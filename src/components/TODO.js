import React, { Component } from 'react'
import { Input,List,Button } from 'antd';
import store from '../store'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from '../store/actions'


export default class TODO extends Component {
   constructor(props){
       super(props)
       this.state=store.getState()
       //需要同时订阅store才可以同时修改视图
      
       this.changeHandler=this.changeHandler.bind(this)
       this.keyUpHandler=this.keyUpHandler.bind(this)
       this.clickHandler=this.clickHandler.bind(this)
       this.storeHandler=this.storeHandler.bind(this)
       store.subscribe(this.storeHandler) 
   }
   //输入框的内容改变时
   changeHandler(event){
    // 创建需要借书的名单
    var action ={
        type : CHANGE_INPUT_VALUE,
        value : event.target.value
    }
    // 把需要借的书告诉给管理员
    // store.dispatch('action', payload)
    store.dispatch(action)
   }
   keyUpHandler(event){
    let code = event.keyCode
    if(code === 13){
        this.clickHandler()
    }

   }
//    当点击了添加按钮即可添加一个TODO item
   clickHandler(){
    console.log(this.state.inputValue);
    let action={
        type:ADD_TODO_ITEM
    }
    store.dispatch(action)
   }

   storeHandler(){
    // 当store里的数据发生改变时重新获取数据
    this.setState(store.getState())
   }

    //点击删除时删除所选项
    delHandler(index){
        console.log(index);
        let action={
            type:DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action)
    }
        render() {
        console.log('store',store.getState());
        console.log(this.state);
        
        return (
            <div style={{position: "fixed",
                         width:500,
                         left:"50%",
                         top: "50%",
                         transform: "translate3d(-50%, -50%, 0)"}}>
                 <Input value={this.state.inputValue}
                        style={{display:"inline-block",width:"85%"}}
                        onChange={this.changeHandler}
                        onKeyUp={this.keyUpHandler}
                        />
                 <Button type="primary" onClick={this.clickHandler}>添加</Button>
                <List
                    size="large"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => <List.Item extra={
                            <Button type="danger" style={{float:"right"}} onClick={this.delHandler.bind(this,index)}>&times;</Button>
                    }>{item}</List.Item>}
                />
            </div>
        )
    }
}
