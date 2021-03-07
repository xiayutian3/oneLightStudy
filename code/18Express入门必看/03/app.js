//express_demo.js 文件
var express = require('express');
var app = express();


// app.get('/index/test',(req,res,next)=>{
//   // res.send('hello express')
//   console.log(1)
//   next()
// },(req,res,next)=>{
//   // res.setHeader("Content-Type", "application/json;charset=utf-8"); //设置头部
//   res.send('hello express')  //已经做出响应了，在调用next（），第三个函数也可以执行，但是不能再做出响应了
//   next()
// },(req,res,next)=>{
//   console.log(3)
//   // res.setHeader("Content-Type", "application/json;charset=utf-8"); //设置头部
//   // res.json({
//   //   data:123456
//   // })
// })


//数组函数处理
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res,next) {
  console.log('CB2');
  next();
}
var cb3 = function (req, res) {
  res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2],cb3);


app.listen(8081, function () {
  console.log("应用实例，8081")
})