// 函数组件 + hooks
import React from 'react'
// 自定义hooksRedux
import HooksRedux from "./HooksRedux"
const {Provider,store} = HooksRedux({
  initalState:{
    name:"张三",
    age:12
  }
})
//异步action,  ,reducer in action
function timeoutAdd(a){
  return new Promise(cb=>setTimeout(()=>cb(a+1),500))
}
const actionAsyncOfAdd = () =>async (dispatch,ownState)=>{
  // console.log('ownState.age',ownState.age)
  const age = await timeoutAdd(ownState.age)
  // console.log('age',age)
  dispatch({
    type:"add",
    reducer(state){
      return {
        ...state,
        age
      }
    }
  })
}

//同步action ,reducer in action
const actionOfAdd = () =>{
  return ({
    type:"add",
    reducer(state){
      return {
        ...state,
        age:state.age+1
      }
    }
  })
}



// 同步action
// function actionOfAdd(){
//   return {
//     type:"add"
//   }
// }

const Button = ()=>{
  function handleAdd(){
    //同步action,直接返回对象
    // store.dispatch(actionOfAdd())

    // reducer in action 
    // action,直接返回对象
    // store.dispatch(actionOfAdd())

    // action,直接返回函数
    store.dispatch(actionAsyncOfAdd())

  }
  return (
    <button onClick={handleAdd}>点击增加</button>
  )
}

const Home = ()=>{
  const state = store.useContext()
  // console.log("store",state)
  return (
    <div>
      <div>我是home组件</div>
      {state.age}
      <hr/>
      <Button></Button>
    </div>
  )
}

const WrapHome = () =>{
  return (
    <Provider>
      <Home></Home>
    </Provider>
  )
}
export default WrapHome