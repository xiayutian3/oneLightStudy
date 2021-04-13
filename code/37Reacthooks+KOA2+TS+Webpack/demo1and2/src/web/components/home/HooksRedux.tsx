
//自定义redux实现
import * as React from "react"
const {useReducer,createContext,useContext} = React

//核心ui行要返回状态回去 reducer 在action 中
function reducerInAction(state,action){
  // reducer 是函数
  if(typeof action.reducer == "function"){
    return action.reducer(state);
  }
  return state
}

export default function HooksRedux(params){
  const {initalState={},reducer} = {...params,reducer:reducerInAction}
  // console.log('initalState',initalState)

  //实际是由createContext管理所有的状态
  const Appcontext = createContext()
  const store = {
    _state:initalState,
    dispatch:undefined,
    getState:()=>{
      return store._state
    },
    useContext:()=>{
      return useContext(Appcontext)
    }
  }
  //自定义reducer
  const middleWareReducer = (lastState,action)=>{
    // switch(action.type){
    //   case "add":
    //     console.log('点击增加',lastState.age)
    //     return {
    //       ...lastState,
    //       age:++lastState.age
    //     }
    //     break;
    //   default:
    //     return lastState;
    //     break;
  // }

    //reducerde 逻辑在 传进来的reducer中
    const nextState = reducer(lastState,action)
    store._state = nextState
    return nextState


  }
  const Provider = props =>{
    //
    const [state,dispatch] = useReducer(middleWareReducer,initalState)
    console.log('state',state)
    if(!store.dispatch){
      store.dispatch = async (action)=>{

        //可以传action 对象，或者函数
        if(typeof action === "function"){
         await action(
           dispatch,
           store.getState()  //返回当前最新的statede 值，因为有可能是异步调用
        );
        }else{
          dispatch(action)
        }
      }
    }
    return <Appcontext.Provider {...props} value={state}></Appcontext.Provider>
  }

  return {
    Provider,
    store
  }
}