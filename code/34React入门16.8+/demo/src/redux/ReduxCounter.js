import React from 'react'
import {connect} from "react-redux"
import {add,reduce} from '../store/actions/countActions'
import * as countActions from '../store/actions/countActions'
import {bindActionCreators} from 'redux';
//副作用 action 
import {fetchData} from '../store/actions/dataActions'

//是一个函数，用于建立组件和store的state,props的映射关系
function mapStateToProps(state){
  return {
    //合并reducer后，会自动增加命名空间 count
    count:state.count.count
  }
}

// //对象形式 会自动触发dispatch
// const mapDispatchtToProps = {
//   add,
//   reduce,
//   fetchData  //正确的写法，这样fetchData的内部才能接收到 // dispatch,getState  都是 redux 中store的方法
// }


//函数形式,会自动触发dispatch
// {
//   add: () => ({ type: ADD })
//   reduce: () => ({ type: REDUCE })
// }
// console.log('countActions',countActions)
const mapDispatchtToProps = (dispatch)=> ({
  // decrement:(num)=> dispatch(decrementAction(num))

  ...bindActionCreators(countActions,dispatch),
  fetchData:()=> dispatch(fetchData())  // 正确的写法， fetchData 内部是函数，不返回{type：”xxx“},这样fetchData的内部才能接收到 // dispatch,getState  都是 redux 中store的方法
  // fetchData  // 直接写 this.props.fetchData能接受方法，但是内部没有 dispatch,getState，这种写法不正确
})



class ReduxCounter extends React.Component{
  handleAdd = ()=>{
    // this.props.dispatch({type:ADD})
    this.props.add()
  }
  handleReduce = ()=>{
    // this.props.dispatch({type:REDUCE})
    this.props.reduce()
  }
  componentDidMount(){
   let res =  this.props.fetchData()
    console.log('component生命周期',res)
  
  }
  render(){
    return (
      <div>
        <h3>我是ReduxCounter组件</h3>
        <div>
          <button onClick={this.handleAdd}>加一</button>
          <span>{this.props.count}</span>
          <button onClick={this.handleReduce}>减一</button>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

//传入mapStateToProps这个参数后，组件便会订阅store中状态的变化
// mapDispatch作为第二个参数
// connect 高阶组件 高阶函数
export default connect(mapStateToProps,mapDispatchtToProps)(ReduxCounter)