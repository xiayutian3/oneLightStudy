// interface IYD {
//   str:string
// }

// class Index {
//   private data:string
//   constructor(data:IYD){
//     this.data = data.str
//   }
//   log(){
//     console.log(this.data)
//   }
// }

// const index = new Index({
//   str:"你是谁,我是你大爷"
// })
// index.log()
// // export default Index


// const React = require("react")
// const ReactDOM = require('react-dom') 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
// console.log('ReactDOM',React,ReactDOM,App)
ReactDOM.render( <App/>,document.getElementById("main"))
