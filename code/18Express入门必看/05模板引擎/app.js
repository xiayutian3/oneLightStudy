//模板引擎
var express = require('express');
var swig = require('swig');  //swig模板引擎
var app = express();

app.set('view engine','html');
app.engine('html', swig.renderFile);

//设置静态资源
app.use(express.static('public'))

app.get('/',(req,res,next)=>{
  // res.send("hello world")   
  res.render('index',{
        title:'首页 ',
        content: 'hello swig'
    })
})




app.listen(8081, function () {
  console.log("应用实例，8081")
})