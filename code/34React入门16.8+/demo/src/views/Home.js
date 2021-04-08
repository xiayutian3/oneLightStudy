
// import React from 'react'

//在二级路由中
import About from './About'
import Info from './Info'

import {Route,Link} from 'react-router-dom'  // HashRouter hash模式


function Home(props){
  function handleClick(param) {  
    //编程式导航
    props.history.push("/about")
  }
  return (
    <div>
      <h1>我是Home组件</h1>
      <button onClick={handleClick}>去到about</button>
      <div>
        <Link to={`${props.match.path}/one`}>二级路由一</Link>
        <Link to="/home/two">二级路由二</Link>
      </div>
      <Route path={`${props.match.path}/one`} component={About}></Route>
      <Route path="/home/two"component={Info}></Route>
    </div>
  )
}
export default Home