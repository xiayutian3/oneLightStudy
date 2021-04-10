// export const ADD = "ADD"
// export const REDUCE = "REDUCE"
 const ADD = "ADD"
 const REDUCE = "REDUCE"


/*
      action creator  
*/

export const add = ()=>({type:ADD})
export const reduce = ()=>({type:REDUCE})

// 显然不行，redux不支持这种action
// redux-thunk thunk action  不纯的操作
// export const getInfo = ()=>{
//   return (dispatch,getState)=>{
//     //不纯的操作
//   }
// }
// dispatch(getInfo())