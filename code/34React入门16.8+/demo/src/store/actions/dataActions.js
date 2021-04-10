// thunk action  副作用的action  redux-thunk

//测试dispatch
export const testDispatch = ()=>({
  type:'ADD'
})


export const fetchData = () =>{
  
  return (dispatch ,getState) =>{
    // dispatch,getState  都是 redux 中store的方法
    console.log(dispatch,getState)
    // dispatch(testDispatch())
   
    // dispatch({type:'ADD'}) //测试dispatch触发,可以

    // //开始请求 loading true
    // return fetch('/xxxx').then(res=>res.json()).then(json=>{
    //   //请求成功 loading false
    //   console.log('获取到的数据',json)
    //   return json
    // }).catch(e=>{
    //   // 错误捕获 loading false
    //   // dispatch()
    // })

    //模拟数据
    return {
      a:123,
      b:'ff'
    }
  }
}