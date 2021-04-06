import React from 'react';
import Classdemo1 from './Classdemo1'
import User from './User'


//自定义组件
function Component1() {
  // ref 再类组件上可以使用，也可以函数内部使用
  const classRef = React.createRef()
  const inputRef = React.createRef()

  //定义样式
  const divStyle = {
    color:"red",
    fontSize:"26px"
  }
  const handleClick = ()=>{
    console.log("click event",classRef)
    inputRef.current.focus() //input 获取焦点
  }
  const props = {
    name:'你是谁',
    age:43
  }
  function getChilddata(data){
    console.log("接受到子组件的值",data)
  }
 
  return (
    <div style={divStyle} className="App">
      <h1>Component1</h1>
      <button onClick={handleClick}>点击事件</button>
      <User name={props.name}></User>
      {/* 另一种方式  ... */}
      {/* <User {...props}></User> */}

      {/* 类组件上使用，函数内部使用 */}
      <Classdemo1 getChilddata={getChilddata} {...props}  ref={classRef} />
      <input type="text" ref={inputRef}/>
    </div>
  );
}



export default Component1