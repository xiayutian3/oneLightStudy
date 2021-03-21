// // import img from "./assets/images/img.jpg"
// // import ttf from './assets/font/1.ttf'
// import {fn} from './list'
// import './assets/css/index.less'
// // console.log(img)
// // const fn = ()=>{
// //   console.log('我是函数');
// // }
// // fn()
// // consol.log(123)
// alert(1223)
// // console.log('hello world')


// //进行热莫更新 hmr   只监听该文件的变化
// if(module.hot){
//   module.hot.accept("./list.js",()=>{
//     console.log('更新list的文件模块')
//     fn()
//   })
//   module.hot.decline("./list.js") //关闭热更新
// }


//es6语法  
// import '@babel/polyfill'  //在webpack。config配置了按需引入，就不需要手动引入了
 

// const arr = [1,2,3]
// arr.map(item=>{
//   return item++
// })
// arr.map(item=>{
//   return item++
// })

// -----------------------------------------------------
// import {fn1,fn2} from "./common/utils"
// fn1()

//摇树优化  treeShaking 

import $ from 'jquery'
console.log("我是文本")


// 动态加载
// import (/*webpackChunkName:'jquery'*/ 'jquery').then(({default:$})=>{
//   console.log($.length)
// })

// import {chunk} from 'lodash'
// import {chunk} from 'lodash-es'
// console.log(chunk([1,2,3],2))
// es模块系统，commonjs es 模块化，lodash 对应的 es模块化库 lodash-es  


//css 代码分割

import './assets/css/index.less'