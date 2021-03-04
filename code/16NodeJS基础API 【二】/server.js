const net = require('net')
//创建tcp服务  
const server = net.createServer()

server.listen("8000")  //监听端口
server.on("listening",function(){
  console.log("监听成功 监听的端口是 8000")
})

//一个新的连接建立 就触发
server.on('connection',(socket)=>{
  console.log('有新的连接')
  socket.on('data',data=>{  //数据交互
    console.log('server端收到client端的data',data.toString())  //，基于流传输 ，二进制转换为字符串

    //返回客户端数据
    socket.write('你好，我是服务器')
    socket.write('客户端请关闭连接')
  })
  server.close()  //关闭连接
})

server.on('close',()=>{  //监听服务关闭事件
  console.log("服务器已经断开连接")
})






