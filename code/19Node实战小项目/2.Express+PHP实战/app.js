const express = require('express')
var mysql      = require('mysql');
var swig = require('swig');
//操作mysql数据库

const app = express()
const port = 8081

//连接mysql数据库
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'phplesson'
});
connection.connect(); //连接

//设置静态文件
app.use(express.static('public'))

//配置swig
app.set('view engine','html');
app.engine('html', swig.renderFile);

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('index',{
    title:'首页',
    content: 'hello swig'
  })
})
app.get('/receive', (req, res) => {
  console.log("req", req.query)
  //数据库操作
  var post  = {
    username: req.query.username
  };
  var query = connection.query('INSERT INTO userinfo SET ?', post, function (error, results, fields) {
    if (error) throw error;
    res.json({
      success:'ok',
      msg:'插入成功'
    })
  });

})

//容错机制 

// 404处理
app.get('*',(req, res)=>{
  res.status(404)
  res.send("404")
})
//错误处理
app.use((err,req, res,next)=>{
  res.status(500)
  res.end('error')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})