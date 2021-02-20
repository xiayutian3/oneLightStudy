
// Iterator（遍历器） 也是解决异步的一种办法（异步变成同步，现在使用少）
// let qq = function* (){
//   yield "冰淇凌";
//   yield "汉堡";
// }
// const ss = qq()
// console.log(ss.next())
// console.log(ss.next())
// console.log(ss.next())





// // class 类
// class Person{
//   constructor(age){
//     this.age = age
//   }
//   tell(){
//     console.log(`年龄是${this.age}`)
//   }
// }
// class Man extends Person{
//   constructor(age){ 
//     super(age)  // 继承父类的属性
//     this.arr = []
//   }
//   tell(){  // 重写tell方法
//     super.tell()  //重载父类的tell方法
//     console.log("hello") // 重写tell方法
//   }
//   set menu(data){   //set
//     this.arr.push(data)
//   }
//   get menu(){  //get
//     return this.arr
//   }
//   static init(){  // 静态属性，方法 直接在类上调用，不需要实例化
//     console.log("static")
//   }
// }
// Man.init()

// // const xiaowang = new Man(30)
// // // console.log(xiaowang.tell())
// // xiaowang.menu = "西红柿"   //检验set get
// // console.log(xiaowang.menu)






// // 1. Set容器 : 无序不可重复的多个value的集合体
// let arr = new Set("面包西红柿")
// arr.add("小牛") //Set { '面', '包', '西', '红', '柿', '小牛' }
// arr.add("小牛")  
// // arr.delete("小牛") //Set { '面', '包', '西', '红', '柿' }
// for (const data of arr) {
//   console.log(data)
// }
// arr.clear();  //清空所有
// console.log(arr);




// 2. Map容器 : 无序的 key不重复的多个key-value的集合体
let food = new Map();
let fruit = {},cook=function () {  };
food.set(fruit,"橘子");
food.set(cook,"汉堡");
// console.log(food.get(cook));
// console.log(food.size);
// food.delete(fruit);
// console.log(food.size);
food.clear();  //清空所有
console.log(food);

