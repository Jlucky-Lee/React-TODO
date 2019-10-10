import React, { Component } from 'react'
import TODO from './components/TODO.js'
import 'antd/dist/antd.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}> 待看电影 </h1>
        <TODO/>
      </div>
    )
  }
}
