// // redux react-redux
// import {createStore,applyMiddleware} from 'redux'
// // 增强action 的副作用中间件
// import thunk from 'redux-thunk'

// //定义一个初始值

// const initalState = {
//   count:0
// }


// // store需要一个reducer
// // （State，action）= newState
// // 唯一的要点，state变化时需要返回全新的对象，而不是修改传入的参数
// function reducer (state = initalState, action){
//   // console.log('reducer',state,action)
//   // if()。。else...  //需要写一大堆的if else 不推荐
//   // switch 应用场景比较简单
//   // 复杂场景，创建一个对象通过action的type来查找对应的处理函数
//   switch (action.type) {
//     case "ADD":
//       return {
//         count:state.count+1
//       }
//     case "REDUCE":
//       return {
//         count:state.count-1
//       }
//     default:
//       return state
//   }
// }

// //创建 store 存放应用的状态
// // ,applyMiddleware(thunk) 增强action，可以写副作用
// const store = createStore(reducer,applyMiddleware(thunk))

// // store.dispatch({type:"ADD"})
// // store.dispatch({type:"REDUCE"})

// export default store



// **************************************************************************

// action,reducer 文件单独分开后


import {createStore,applyMiddleware} from 'redux'
// 用来解决副作用 action
import thunk from 'redux-thunk'
import reducer from './reducers/rootReducer' //所有的reducer

const store = createStore(reducer,applyMiddleware(thunk))

export default store
