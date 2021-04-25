// SharedArrayBuffer 与 Atomics   
//给js带来了多线程的功能，高级特性，js引擎核心改造
//共享内存主要思想：把多线程引入js
//新的全局对象  SharedArrayBuffer
// web worker  postMessage通信
//多线程 竞争，Atomics

// new SharedArrayBuffer(length)  //缓冲区大小，字节byte为单位  与arrayBuffer api一致，数据不能共享，但是ShareArrayBuffer数据可以共享，



//创建一个worker进程
const worker = new Worker("./worker.js")

// //postMessage
// worker.postMessage("hello i am main")
// worker.onmessage = function(e){
//   console.log(e.data);
// }

// //数据量大 通信效率底





//新建1kb共享内存
const shareBuffer = new SharedArrayBuffer(1024)
// 新建视图，操作内存
const initArrBuffer = new Int32Array(shareBuffer)
// console.log('length',initArrBuffer)
//写入数据
for(let i=0;i<initArrBuffer.length;i++){
  initArrBuffer[i] = i
}

//postMessage 发送的共享内存地址
// worker.postMessage(shareBuffer)
worker.postMessage(initArrBuffer)

// 3s后唤醒线程
setTimeout(()=>{
  //3个参数
  // 1.共享内存的视图数组
  // 2.index:视图数据的位置
  // 3.count：唤醒的worker进程数，默认Infinity
  Atomics.notify(initArrBuffer,11,1)
  // Atomics.notify(initArrBuffer,12,1)
},3000)

worker.onmessage = function(e){
  // console.log(e.data);
  // console.log('修改后的数据',initArrBuffer[20])
  console.log('修改后的数据',Atomics.load(initArrBuffer,20))
}



/// Atomics 运算方法
// Atomics.add(initArrBuffer,index,value)
// Atomics.sub(initArrBuffer,index,value)
// and , or , xor  //位运算
// compareExchange(initArrBuffer,index,oldVal,newVal)
// compareExchange(initArrBuffer,12,12,33) //第12的位置的值是不是12，是，写入33，把值换成33，不是就不写入