// 模板字符串

// const s = "hello"
// const e = "world"
// const c = test `foor ${s} ${e} bar`  // 可以直接调用test（）
// function test(strs,...values){
//   console.log(strs,values)  //[ 'foor ', ' ', ' bar' ], [ 'hello', 'world' ]
// }


// Object is()

// console.log(NaN === NaN);  // false es5方法
// console.log(Object.is(NaN,NaN))  //true es6方法，可以判断



// es6原型上的一些扩展
// const eat = {
//   getEat(){
//     return "chiji"
//   }
// }
// const drink = {
//   getDrink(){
//     return "hejiu"
//   }
// }
// // //隐式 指定原型

// // let sunday = Object.create(eat)  // 将eat对象作为原型，创建返回一个新的空对象
// // // console.log(sunday.getEat())  // sunday原型上就有了getEat（）方法 
// // // console.log(Object.getPrototypeOf(sunday))  //返回sunday的原型对象eat
// // console.log(Object.setPrototypeOf(sunday,drink))  //设置sunday的原型对象为drink
// // console.log(Object.getPrototypeOf(sunday)) //返回sunday的原型对象 drink


// // 显示指定原型
// let sunday = {
//   __proto__:drink,  //指定原型对象
//   getDrink(){
//     return super.getDrink()+"喝茶"  // 通过super调用父类的方法
//   }
// }
// // sunday.__proto__ = eat   // 指定原型对象
// // console.log(sunday.getEat())
// console.log(sunday.getDrink())






// 函数扩展
// const fn = function pp(){

// }
// console.log(fn.name)  //pp  函数的名字

//箭头函数(用一句话概括：箭头函数中的this指向的是定义时的this，而不是执行时的this。)

// window.a = 50
// const ss = {
//   a:40,
//   // p:function(){
//   //   console.log(this.a) //40
//   // }
//   p:()=>{
//     console.log(this.a) // 50 外层对象上的this的指向
//   }
// }
// ss.p()




// 函数形参传值(默认值)
// function test(...result){   // ...result 替代 arguments
function test(a=1,{options=true}={}){
  console.log(options)
}
test(30,{options:123})