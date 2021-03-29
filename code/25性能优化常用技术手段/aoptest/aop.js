// 面向切面编程 aop  无侵入式

//统计一下当前的所有的函数谁消耗的时间最长
function test(){
  alert(2)
  return "me test"
}

Function.prototype.before = function (fn){

  var __self = this;

  // fn()
  // // console.log(this,arguments[0] === fn)  // test function , true
  // return __self.apply(this,arguments)

  return function(){
    // console.log(this) // 此时this指向了window
    // fn(this,arguments)
    if(fn(this,arguments) == false){  //类似于可以做一层检验
      return false
    }
    return __self.apply(__self,arguments)
  }
}

Function.prototype.after = function (fn){
  var __self = this;
  return function(){
    var result = __self.apply(__self,arguments)
    fn.apply(this,arguments)
    return result
  }
 
  
}

// 默认函数执行2 遍了  test作为中转
// before 回调和test一起送到after去
// 或者 after 回调和test一起送到before去

// test.before(function(){
//   alert(1)
// })
// test.after(function(){
//   alert(3)
// })


//挂载 self=》test 执行before回调 执行self after自己执行回调
// test.before(function(){
//   alert(1)
// }).after(function(){
//   alert(3)
// })()

test.after(function(){
  alert(3)
}).before(function(){
  alert(1)
  // return false
})()