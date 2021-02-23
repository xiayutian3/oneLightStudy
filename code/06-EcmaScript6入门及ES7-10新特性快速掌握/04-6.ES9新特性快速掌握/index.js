// ES9
// 新增异步迭代器 Asynchronous Iterator，异步执行语句 for...await...of ,异步生成器 Async generator

// 迭代器 特殊对象，
//  next() => {value,done} done:布尔值类型  指针

//创建一个迭代器
// const createIterator = items => {
//   const keys = Object.keys(items)  //[key1,key2,...]
//   const len = keys.length
//   let pointer = 0
//   return {
//     next(){
//       const done = pointer >=len
//       const value = !done?items[keys[pointer++]]:undefined
//       return {
//         value,
//         done
//       }
//     }
//   }
// }

// const it1 = createIterator([5,3,4])
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())
// console.log(it1.next())


//Symbol.iterator  for...of  迭代器接口
//数组具有原生的iterator接口
// const arr = [1,2,3]
// console.log(typeof arr[Symbol.iterator])  //function
// for(const val of arr){
//   console.log(val);
// }


// 对象没有

// const obj = {name:'shangshan',age:4}
// // 手动添加迭代器接口
// obj[Symbol.iterator] = function(){
//   const me = this
//   const keys = Object.keys(me)
//   const len = keys.length
//   let pointer = 0
//   return {
//     next(){
//       const done = pointer >=len
//       const value = !done?me[keys[pointer++]]:undefined
//       return {
//         value,
//         done
//       }
//     }
//   }
// }

// console.log(typeof obj[Symbol.iterator])  //function
// for(const val of obj){
//   console.log(val)
// }







// //什么生成器,生成迭代器
// // generator 特殊的函数 yield表达式 ，*
// // 执行函数时，并不会执行函数体
// function * fn(){
//   console.log('正常函数我会执行')
//   yield 1
//   yield 2
//   yield 3
//   console.log('执行结束')
// }
// const iteratorFn = fn()  //只是创建了一个iterator
// console.log(iteratorFn.next())
// console.log(iteratorFn.next())
// console.log(iteratorFn.next())
// console.log(iteratorFn.next())









//异步迭代器
//区别
// 同步：next()=>{value:'',done:false}
// 异步：next()=>promise:{value:'',done:false}

// const createAsyncIterator = items => {
//   const keys = Object.keys(items)  //[key1,key2,...]
//   const len = keys.length
//   let pointer = 0
//   return {
//     next(){
//       const done = pointer >=len
//       const value = !done?items[keys[pointer++]]:undefined
//       //异步
//       return Promise.resolve({
//         value,
//         done
//       })
//       //同步
//       // return {
//       //   value,
//       //   done
//       // }
//     }
//   }
// }
// const asyncI = createAsyncIterator([7,4,5])
// // asyncI.next().then(res=>{
// //   console.log(res)
// // })
// // asyncI.next().then(res=>{
// //   console.log(res)
// // })
// // asyncI.next().then(res=>{
// //   console.log(res)
// // })
// // asyncI.next().then(res=>{
// //   console.log(res)
// // })


// //for...await...of   //异步迭代器

// const asyncItem = {
//   name:'shang',
//   age:4,
//   [Symbol.asyncIterator](){
//     const me = this
//     const keys = Object.keys(me)
//     const len = keys.length
//     let pointer = 0
//     return {
//       next(){
//         const done = pointer >=len
//         const value = !done?me[keys[pointer++]]:undefined
//         //异步迭代器
//         return new Promise(resolve=>{
//           setTimeout(()=>{
//             resolve({value,done})
//           },1000)
//         })
//       }
//     }
//   }
// }
// async function fn(){
//   for await (const val of asyncItem){
//     console.log(val)
//   }
// }
// fn()




// //异步生成器
// async function* fn(){
//   yield await Promise.resolve(1)
//   yield await Promise.resolve(2)
//   yield await Promise.resolve(3)
// }
// const fn1 = fn()
// async function asyncIteratorFn(){
//   for await (const val of fn1){
//     console.log(val)
//   }
// }
// asyncIteratorFn()




// / Promise.finally()

// function fn(){
//   return new Promise((resolve,reject)=>{
//     // resolve('成功')
//     reject('失败')
//   })
// }
// fn().then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log('我都会执行'))





// //Rest/Spread 属性

// function fn(a,b,...c){
//   console.log(a,b,c)
// }
// fn(1,2,3,4,5)
// //扩展运算符 ... 仅用于数组（es6）
// const arr = [1,2,3]
// console.log([11,22,...arr])

// //es9可以用于对象
// const obj = {
//   name:'shang',
//   age:45,
//   info:{
//     phone:188823
//   }
// }
// // const {name,...infos} = obj
// // console.log(name,infos)

// // function fn({name,...infos}){
// //   console.log(name,infos)
// // }
// // fn(obj)

// //浅拷贝
// const objClone = {...obj}
// objClone.name = "wertr"
// console.log(objClone.name)
// console.log(obj.name)

// objClone.info.phone = 123456
// console.log(objClone.info.phone)
// console.log(obj.info.phone)







// //es9正则表达式的增强
// // 需求：YYYY-MM-DD 年月日解析到数组中
// // 原来的写法
// const dateStr = "2030-08-01"
// const reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// const res = reg.exec(dateStr)
// console.log(res)
// console.log(res[1],res[2],res[3])

// //es9的写法 给捕获的分组自定义名称 ?<name>
// const reg1 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<date>[0-9]{2})/
// const res1 = reg1.exec(dateStr)
// console.log(res1.groups.year,res1.groups.month,res1.groups.date)

// //replace 改成这种 08-01-2030
// const newDate = dateStr.replace(reg1,"$<month>-$<date>-$<year>")
// console.log(newDate)



// es9反向断言
//先行断言  之前

// // 获取货币的符号
// const str = "$123"
// //先行断言 (?=pattern)
// const reg = /\D(?=\d+)/
// const result = reg.exec(str)
// // console.log(result)
// // console.log(result[0])  //$

// //反向断言 后行断言 (?<=pattern) 拿数字
// const reg1 = /(?<=\D)\d+/
// const result1 = reg1.exec(str)
// console.log(result1)
// console.log(result1[0])  //123





// es9 dotAll方式  
// 在最新的 ECMAScript 规范中，为 JavaScript 的正则表达式增加了一个新的标志 s 用来表示 dotAll。以使 . 可以匹配任意字符
//. 不能 匹配\n

// const str = "shang\nshan"
// console.log(/shang.shan/.test(str)) //false
// console.log(/shang.shan/s.test(str)) //true



//匹配汉字
// const oldReg = /[\u4e00-\u9fa5]/  //繁琐不好记
// const str = "上山打老虎"
// const newReg = /\p{Script=Han}/u
// console.log(oldReg.test(str))
// console.log(newReg.test(str))


//非转移序列的模板字符串
// \u unicode转义  \x 十六进制转义
// 如 window的路径 c:\uu\xx\6
// String.raw`\u{54}`  输出 "\u{54}"  

