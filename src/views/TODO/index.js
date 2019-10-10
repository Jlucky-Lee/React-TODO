import React, { Component } from 'react'
import { Input,List,Button } from 'antd';
export default class TODOUI extends Component {
    render() {
        return (
            <div style={{position: "fixed",
                        width:500,
                        left:"50%",
                        top: "50%",
                        transform: "translate3d(-50%, -50%, 0)"}}>
                <Input value={this.props.inputValue}
                    style={{display:"inline-block",width:"85%"}}
                    onChange={this.props.changeHandler}
                    onKeyUp={this.props.keyUpHandler}
                    />
                <Button type="primary" onClick={this.props.addHandler}>添加</Button>
            <List
                size="large"
                bordered
                dataSource={this.props.list}
                renderItem={(item,index) => <List.Item extra={
                        <Button type="danger" style={{float:"right"}} onClick={(index) =>{this.props.delHandler(index)}}>&times;</Button>
                }>{item}</List.Item>}
            />
        </div>
        )
    }
}
