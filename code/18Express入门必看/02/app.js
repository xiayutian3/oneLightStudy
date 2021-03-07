//express_demo.js 文件
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//解析cookie
var cookieParser = require('cookie-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cookieParser()); //解析cookie req.cookies

// app.get('/', function (req, res,next) {
//   req.data = 123
//   next()
// },function(req, res,next){          //中间件逻辑
//   console.log("通过中间件取到的值",req.data)
//   res.send('Hello World123');   //结束响应
// })




// app.get('/', function (req, res) {
//   console.log("req", req.query)  //?username=123456&123=lk  req.query
//  //  console.log("res", res)
//   res.send('Hello World123');
// })
// app.get('/:id', function (req, res) {
//   console.log("req", req.params.id) //  '/:id'     req.params.id
//  //  console.log("res", res)
//   // res.send('Hello World123');

//   res.json({    //：传送JSON响应
//     id:req.params.id
//   })  
//   // res.render(view,[locals],callback)   //渲染一个view，同时向callback传递渲染后的字符串
// })


//渲染页面
app.get('/index.html',  function (req, res) {
  res.sendFile( __dirname + "/views/" + "index.html" );
})

// form 表单接口
app.post('/username',urlencodedParser,(req,res)=>{
  console.log(req.body.username)
  res.redirect("https://www.baidu.com/")  //跳转
})


//设置静态文件
// app.use('/public', express.static('public'));   //http://localhost:8081/public/scripts/index.js
app.use(express.static('public'));    //区别再路径上需不需要加 /public    http://localhost:8081/scripts/index.js


//解析cookie  cookieParser中间件
app.get('/cookie',(req,res)=>{
  console.log(req.cookies)  
  res.send('cookies 获取')
})

app.get('/err',function(req,res,next){
  consoole.log(122)
})
// 错误处理中间件
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8081, function () {
  console.log("应用实例，8081")
})