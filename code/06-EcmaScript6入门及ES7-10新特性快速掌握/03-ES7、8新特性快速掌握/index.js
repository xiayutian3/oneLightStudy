// // 1.includes
// const arr = [1,2,3]
// console.log(arr.indexOf(4)>=0)
// console.log(arr.includes(4))


// //** 
// console.log(Math.pow(2,3))
// console.log(2 ** 3)


// es8
// 回调函数   promise   generator  async/await
// function promiseFn(){
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve("成功信息")
//     },1500)
//   })
// }
// async function fn(){
//   let res = await promiseFn()
//   console.log("异步代码执行完毕", res)
// }
// fn()

// //错误捕获 reject错误  try catch
// function promiseFn(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       reject("错误信息")
//     },1500)
//   })
// }
// async function fn(){
//   // try {
//   //   let res = await promiseFn()
//   //   console.log("异步代码执行完毕", res)
//   // } catch (error) {
//   //   console.log("error", error)
//   // }



//   // 提前捕获错误信息，让后面的代码可以继续执行
//     let res = await promiseFn().catch(err=>console.log(err))
//     console.log("异步代码执行完毕", res)

// }
// fn()




// //多个await异步命令
// function promiseFn(){
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve("成功信息")
//     },1000)
//   })
// }
// function promiseFn1(){
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve("成功信息")
//     },2000)
//   })
// }
// async function fn1(){
//   console.time("fn1")
//   let res = await promiseFn()
//   let res1 = await promiseFn1()
//   console.timeEnd("fn1")    // 执行3s ，串行promise 
// }

// // promise all（） 并发执行promise
// async function fn2(){
//   console.time("fn2")
//   let [res,res2] = await Promise.all([promiseFn(),promiseFn1()])
//   console.timeEnd("fn2") 
// }

// fn1()  // 3s
// fn2()  // 2s







// Object.values()  vs  Object.keys()
// const obj = {name:"上山",age:4}
//之前
// console.log(Object.keys(obj).map(key=>obj[key])) //[ '上山', 4 ]
//ES8
// console.log(Object.values(obj))  //[ '上山', 4 ]





// // Object.entries() vs for in (会枚举原型链中的属性)
// const obj = {name:'下山',age:12}
// // console.log(Object.entries(obj))  //[ [ 'name', '下山' ], [ 'age', 12 ] ]
// // 非对象会强制转换为对象
// // console.log(Object.entries("shangshan"))
// //打印输出 [
// //   [ '0', 's' ],
// //   [ '1', 'h' ],
// //   [ '2', 'a' ],
// //   [ '3', 'n' ],
// //   [ '4', 'g' ],
// //   [ '5', 's' ],
// //   [ '6', 'h' ],
// //   [ '7', 'a' ],
// //   [ '8', 'n' ]
// // ]

// //需求 ： 遍历对象的键值
// for(const [key,value] of Object.entries(obj)){
//   console.log(`${key}-${value}`)
// }
// // 一样效果
// Object.entries(obj).forEach(([key,value]) => {
//   console.log(`${key}-${value}`)
// });





//String Padding

//1.String.prototype.padStart(targetLength,[padString])  // 默认填充空字符串
//targetLength 目标长度，从右侧开始数
//padString  默认 ''
//2.String.prototype.padEnd

// console.log("123".padStart(4,"30")) // 3123  长度不够，截取
// console.log("123".padStart(5,"30")) // 30123
// console.log("123".padStart(10,"30")) // 303030123  重复30满足长度





// // Object.getOwnPropertyDescriptors()  //获取自身属性的描述符
// const obj = {
//   name:'shangshan',
//   get fn(){
//     return "fn"
//   }
// }
// console.log(Object.getOwnPropertyDescriptors(obj))




// SharedArrayBuffer 与 Atomics   
//给js带来了多线程的功能，高级特性，js引擎核心改造
//共享内存主要思想：把多线程引入js
//新的全局对象  SharedArrayBuffer
// web worker  postMessage通信
//多线程 竞争，Atomics

// new SharedArrayBuffer(length)  //缓冲区大小，字节byte为单位  与arrayBuffer api一致，数据不能共享，但是ShareArrayBuffer数据可以共享，
