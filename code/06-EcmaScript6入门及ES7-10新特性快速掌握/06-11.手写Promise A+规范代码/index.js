//promiseA+规范 class

//promise的三种状态
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

//promise处理过程
function promiseResolutionProcedure(promise2,x,resolve,reject){
  // 处理循环引用promise
  if(promise2 === x){
    throw new Error("循环引用promise")
  }

  //处理promise 对象
  if(x instanceof MyPromise){
    if(x.state === PENDING){
      x.then(y=>{
        // console.log("y",y) //step6.1"
        // resolve(y)
        promiseResolutionProcedure(promise2,y,resolve,reject) //递归调用
      },reject) //失败就调用reject
    }else{
      //状态已经确定
      x.state === FULFILLED && resolve(x.value)
      x.state === REJECTED && reject(x.value)
    }
  }
  // 判断thenable 对象
  if((typeof x === "object" || typeof x === "function")&& x!==null){ //typeof null 是object，排除掉null
    if(typeof x.then === "function"){
      x.then(y=>{
        // console.log("y",y) //step6.1"
        // resolve(y)
        promiseResolutionProcedure(promise2,y,resolve,reject) //递归调用
      },reject) //失败就调用reject
    }else{
      resolve(x)
    }
  }else{
    resolve(x)
  }
}


class MyPromise {
  constructor(fn) {
    this.state = PENDING
    this.value = undefined
    this.resolveCallbacks = []
    //拿到 resolve调用时候的参数
    const resolve = (val) => {
      //如果resolve的值是一个promise，要执行promise//第8点
      if(typeof val === "object" || typeof val === "function"){
        promiseResolutionProcedure(this,val,resolve,reject) //递归调用
        return 
      }

      setTimeout(() => {  //promise是异步的处理，同步的化没有办法收集then里方法，this.resolveCallbacks 的长度为0 ，就无法调用
        if (this.state === PENDING) {  //是pending状态才执行then，有且只执行一次
        this.state = FULFILLED
        this.value = val
        // 执行所有的then方法,按顺序调用
        // debugger
        this.resolveCallbacks.map(fn => fn())
        }
      })
    }
    const reject = (val) => {
      this.value = val
      this.state = REJECTED
    }
    fn(resolve, reject)
  }
  then(onFulfilled= val=>val) {  //处理空then方法，传什么返回什么
    if (this.state === PENDING) { //PENDING状态才添加
      //缓存起来，等resolve的时候调用
      // this.resolveCallbacks.push(onFulfilled)
      const promise2 =  new MyPromise((resolve,reject)=>{
        this.resolveCallbacks.push(()=>{
          const x = onFulfilled(this.value)  //return "step4.1" 返回一个新的promise
          promiseResolutionProcedure(promise2,x,resolve,reject)
        })
      })

      return promise2
    }
  }
}
