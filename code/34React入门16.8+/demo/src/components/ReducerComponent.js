import React,{useReducer} from "react"

//(state,action)=> newState 和 redux完全相同


// useReducer 接受三个参数

//定义简单的reducer  第一个
const reducer = (state,action)=>{
  switch (action.type){
    case "add":
      return {...state,count:state.count+1};
    case "reduce":
      return {...state,count:state.count-1};
    default:
      return state
  }
}


//第二个参数  createStore（） 指定默认的值
let initialState = {count:10,name:"reducer"}

// 第三个参数 ，函数 会把第二个参数当作参数执行
const init = initialCount =>{
  //进行一些初始值的逻辑操作
  return {count:initialCount.count}
}

//store reducer action 三大核心redux

export default function ReducerComponent(){
  const [state,dispatch] = useReducer(reducer,initialState,init)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reduce'})}>-</button>
      <button onClick={() => dispatch({type: 'add'})}>+</button>
    </>
  );
}