
import React from 'react';

function User (props){
  return (
    <div>
      <h2>我是user组件</h2>
      <p>{props.name}--{props.age}</p>
    </div>
  )
}
//设置函数组件默认值
User.defaultProps = {
  age:18
}

export default User