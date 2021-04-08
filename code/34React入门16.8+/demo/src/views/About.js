
// import React from 'react'
//props对外的接口
function About(props){
  return (
    <div>
      <h1>我是About组件</h1>
      <p>获取到的参数{props.match.params.id}</p>
    </div>
  )
}
export default About