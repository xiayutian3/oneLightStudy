// onmessage = function (e){
//   console.log(e.data)
//   postMessage("hello i am worker")
// }


// SharedArrayBuffer
// 直接读取共享内存地址，效率大大提升
onmessage = function (e){
  let arrBuffer = e.data
  // console.log(arrBuffer)
  // //操作数据
  // arrBuffer[20]=88



  // //操作数据，读取数据应该Atomics,数据的原子性，以确保数据的正确
  // console.log(Atomics.load(arrBuffer))
  // console.log(Atomics.load(arrBuffer,20))
  // //修改数据
  // console.log(Atomics.store(arrBuffer,20,99))  //返回修改的值 99
  // console.log(Atomics.exchange(arrBuffer,20,111))  //都可以修改数据，返回替换的值 99
  // Atomics.store(arrBuffer,20,99)




  //休眠操作
  //满足条件，后边的代码就不会执行了
  Atomics.wait(arrBuffer,11 ,11);
  // Atomics.wait(arrBuffer,11 ,12);
  
  // Atomics.wait(arrBuffer,11 ,11,2000);  //2s后自动唤醒
  console.log("我已经进入休眠了，不会被执行")


  // postMessage("hello i am worker")
}