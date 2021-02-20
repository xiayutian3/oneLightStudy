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