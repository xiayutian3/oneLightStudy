var express = require('express');
var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);  //socket.io 数据推送
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	// res.send('<h1>Welcome Realtime Server</h1>');
  res.sendFile(__dirname + '/views/index.html') //可以
});


io.on("connection", socket => {  // 客户端链接成功

  socket.emit('open');  //通知客户端已连接

  socket.on("message", msg => {  // 监听的频道必须和客户端监听的频道相同，等待消息
  console.log("接受客户端的msg", msg)
      socket.emit("message", msg);  // 向所有客户端发送信息

      //出发消息（一对一）
      socket.emit('test','我是自定义的消息名')   //发送给自己的消息
      //广播向其他用户发小心(1对多) 
      socket.broadcast.emit('test','广播自定义的消息')  //向其他用户发送消息
  });

  socket.on("disconnect", _ => {  // 客户端断开链接
    console.log('客户端断开链接')
  });

});
 
http.listen(3000, function(){
	console.log('listening on *:3000');
});

