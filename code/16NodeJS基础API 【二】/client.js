const net = require('net')
//连接到服务器
// 默认的host ： localhost，也可以ip
const netScoket = net.connect('8000')

netScoket.on('error',()=>{
  console.log('连接失败')
})

//连接成功
netScoket.on('connect',()=>{
  console.log('客户端与服务器连接已经建立')
  netScoket.write('你好，我是客户端')  //发送数据

  //接受服务端数据
  netScoket.on('data',data=>{
    console.log('客户端收到服务端的数据',data.toString())  //传输二进制流，转换为字符串
    netScoket.end() // 主动调用end触发关闭连接事件，发送  接收完毕，结束事件
  })
})

netScoket.on('end',()=>{  //监听接收结束，关闭事件
  console.log('客户端关闭连接成功')
})



