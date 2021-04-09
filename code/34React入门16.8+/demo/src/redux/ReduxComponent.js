import React from 'react'

// redux react-redux
import store from '../store/index'

class ReduxComp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }
  handleAdd = ()=>{
    this.setState({
      count:this.state.count + 1
    })
  }
  handleReduce = ()=>{
    this.setState({
      count:this.state.count - 1
    })
  }
  render(){
    return (
      <div>
        <h3>我是count组件</h3>
        <div>
          <button onClick={this.handleAdd}>加一</button>
          <span>{this.state.count}</span>
          <button onClick={this.handleReduce}>减一</button>
        </div>
      </div>
    )
  }
}

export default ReduxComp