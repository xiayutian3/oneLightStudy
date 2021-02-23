// es10  bigInt
// flat() flatMap()

//flat 默认处理一层[]
// const arr = [1,2,3,[4,5]]
// const arr1 = [1,2,3,[4,5,[6,7]]]
// console.log(arr.flat())
// // 指定遍历深度 
// console.log(arr1.flat(Infinity))

//去除数组的空项
// const arr2 = [1,2,,,,3]
// console.log(arr2)
// console.log(arr2.flat())

// //flatMap() 只能处理一层[]
// const arr = [1,2,3]
// console.log(arr.map(x=>[x*2]))  // [[2], [4], [6]]
// console.log(arr.flatMap(x=>[x*2]))  // [2, 4, 6]
// console.log(arr.flatMap(x=>[[x*2]])) // [[2], [4], [6]]



//使用 Object.fromEntries 将数组转成对象(自身可枚举属性) ，和for in区别 for in 遍历原型上的属性
//与 Object.entries（）相反

// const map = new Map([
//   ["name","shangshan"],
//   ["age","12"]
// ])
// // console.log(Object.fromEntries(map))  //{name: "shangshan", age: "12"}

// const obj = {name: "shangshan", age: "12"}
// console.log(Object.entries(obj)) //[ ["name","shangshan"], ["age","12"]]




// // String.prototype.matchAll 返回包含所有匹配正则表达式及分组捕获迭代器
// const str = "yideng xuetang xuetang"
// const reg = /xue*/g
// //之前
// // console.log(str.length)  //
// // while((matches = reg.exec(str)) !== null){
// //   console.log(`${matches[0]}-${reg.lastIndex}`)  //xue-10 xue-18  //lastIndex 属性用于规定下次匹配的起始位置。
// // }

// //现在
// let matches2 = str.matchAll(reg)
// console.log(matches2) //RegExpStringIterator {}迭代器
// // for (const val of matches2){
// //   console.log(val)
// // }
// console.log(matches2.next())
// console.log(matches2.next())
// console.log(matches2.next())


// //捕获分组
// const reg = /y(i)(deng(\d?))/g
// const str = "yideng66yideng66"
// console.log(str.match(reg))// 直接输出结果，没有分组  ["yideng6", "yideng6"]

// const res = str.matchAll(reg)  //有结果，有分组的捕获
// console.log(res)
// const arr = [...res] //... 也可以迭代器起作用,展开迭代器
// console.log(arr)



//trimStart() trimEnd(),对字符串处理空白


// //Symbol.prototype.description //symbol的描述 字符串
// const sym = Symbol("描述")
// console.log(sym)
// console.log(String(sym))
// console.log(sym.description)




// //catch的参数可以省略
// // 之前
// try{}catch(e){console.log(e)}
// //现在
// try{}catch{}



//行分割符，段分隔符，允许字符串中加入
//JSON.parse()  JSON是ECMAScript一个子集
//JSON =》 可以包含 行分割符，段分隔符

// //草案 解决这个问题
// const json = '{"name":"hello\nworld"}'
// console.log(json)  //可以正确解析\n
// // JSON.parse(json) //JSON.parse,不能解析 \n 

//更加友好的JSON.stringify，修复
//增加字符U+D800 到 U+DFFF处理
// U+2028 行分割符   U+2029 段分隔符

// JSON.stringify("\UDEAD")  //JSON转义序列(期望是后面的结果) ""\\UDEAD""，但现在还不是，浏览器现在还不支持




// Array.prototype.sort()
//小于10 插入排序  快速排序不稳定排序  时间复杂度o(n^2)

//新的v8 TimSort() o(nlogn)

// //v8源码

// const arr = [
//   {name:'w',age:18},
//   {name:"shang",age:4},
//   {name:"we",age:4}
// ];
// arr.sort((a,b)=>a.age-b.age);
// //非稳定排序 (原来age：4的在数组中改变位置)
// [
//   {name:"we",age:4},
//   {name:"shang",age:4},
//   {name:'w',age:18}
// ];
// //稳定排序 (原来age：4的在数组中位置不变)
// [
//   {name:"shang",age:4},
//   {name:"we",age:4},
//   {name:'w',age:18}
// ];




// 新的Function.toString()
// Object.prototype.toString()
//标准化，返回精确字符
// function /**注释 */ foo /**注释 */(){}
// //之前
// // function foo (){}
// //现在
// console.log(foo.toString())  //function /**注释 */ foo /**注释 */(){}




// BigInt 任意精度整数 第8种基本数据类型 第7种 Symbol
//2^53  之前最大的整数
// console.log(Number.MAX_SAFE_INTEGER) //最大的安全整数  9007199254740991

// let num = 1n //简写方式
// let num2 = 10n
// const bigIntNumber= BigInt(12)
// console.log(bigIntNumber)  //12n
// // console.log("类型",typeof num)  //bigint
// // console.log("类型比较", num === 1)  //false 值一样，类型不一样
// // console.log("类型比较", num == 1) //ture,
// console.log("运算",num-num2) //  -9n  只能同类型运算，不能和number类型运算





// //标准化的globalThis 对象  在任何平台返回全局属性
// //之前的处理 
// const getGlobal = function(){
//   if(typeof self != "undefined") return self
//   if(typeof window != "undefined") return window
//   if(typeof global != "undefined") return global
//   throw new Error()
// }
// // es10 出来的 globalThis  在不同的平台 ，返回全局作用域
// console.log(globalThis)




//小总结

// ES7 includes 2**2
// ES8 异步操作，Object，String 能力上进一步的增强
// ES9 解决遍历种的异步，异步归一的操作问题等，提升正则表达式处理能力
// ES10 没有大幅度改动，bigInt，globalThis标准化 能力增强 JSON,数组，字符串，对象


















