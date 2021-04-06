import React from 'react';

class Classdemo1 extends React.Component{
  //构造函数 如果没有声明，默认添加构造函数
  constructor(props){
    //先创建父类实例的this，再通过子类构造函数修改this ，es6固定写法
    super(props);
    //组件内部的状态 setState
    this.state = {
      name1:this.props.name+"www",
      count:0,
      isShow:true,
      username:"受控组件",
      txtVal:''
    }
    //创建 Refs
    this.myRef = React.createRef();
  }
  handleClick=(e)=>{

    // react中要显示调用preventDefault 阻止默认行为。return false不生效
    e.preventDefault()


    // console.log(123)
    this.setState(state=>({
      // 函数的方式   基于当前的state进行计算  保证拿到的state一定是最新的 ，
      count:++state.count
    }))
    // console.log('异步更新',this.state.count)
    //传递值给父组件
    this.props.getChilddata(this.state.count)


    //获取dom
    // console.log('非受控组件的值',this.myRef)
    console.log('非受控组件的值',this.myRef.current.value)
  }
  handleShow=()=>{
    // 对象的方式， 不一定保证拿到的state是最新的
    this.setState({isShow:!this.state.isShow})
  }
  handletextarea=(e)=>{
    // console.log(e.target.value)
    console.log('txtVal',this.state.txtVal)
    // 对象，异步更新
    this.setState({
      txtVal:e.target.value
    })
  }
  handleChange=(e)=>{
    // 对象，异步更新
    this.setState({
      username:e.target.value
    })
    // console.log(this.state.username)
  }
  handleBtnClick=(params,event)=>{
    console.log('传递的参数值',params,event)
  }
  render(){
    const {name,age} = this.props
    return (
      <div>
        {this.state.isShow?<div>hello class component</div>:''}
        {/* <p>{name}--{age}</p> */}
        <p>
          {this.state.name1}--{name}--{age}
          {/* 受控组件 */}
          <textarea  value={this.state.txtVal} onChange={this.handletextarea}></textarea>
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </p>
        <div>
          {/* 非受控组件 */}
          <label htmlFor="name">用户名</label>
          <input type="text" ref={this.myRef} defaultValue="我是默认的受控组件的值" id="name"/>
        </div>
        <div><button onClick={this.handleClick}>加加1</button><span>{this.state.count}</span></div>
        <div>
          <button onClick={this.handleShow}>显示隐藏</button>
          {/* 传递参数的两种方式 */}
          {/* <button onClick={this.handleBtnClick.bind(this,123456)}>传递参数</button> */}
          <button onClick={(e)=>this.handleBtnClick(123456,e)}>传递参数</button>
        </div>
        

      </div>
    )
  } 
}
export default Classdemo1
