// import logo from './logo.svg';
// import React,{Fragment} from 'react';
import React from 'react';

import './assets/css/App.css';
// import Component1 from './components/Component1'
import HookComponent from './components/HookComponent'
// import {BrowserRouter,Route,Link,Switch,NavLink, Redirect,withRouter} from 'react-router-dom'  // HashRouter hash模式
import {Route,Link,Switch,NavLink,withRouter} from 'react-router-dom'  // HashRouter hash模式
import About from './views/About'
import Home from './views/Home'
import Info from './views/Info'
import NotFound from './views/NotFound'




// 根组件  函数组件
function App(props) {
  // 没有经过路由的匹配
  //浏览器直接打开的 没有history对象,    加上 withRouter包裹就有了
  console.log('app',props.history);
  // const isLogin = false

  const divtitle = "我是app"
  // dataid="1"  dataid不能小驼峰命名，这是规定
  return (
    // <Fragment> 不引入Fragment，也可以使用 <></>来代替
    <>  
    {/* // <BrowserRouter>   */}
      <div title={divtitle} className="App" dataid="1">
        <h1>hello world</h1>
        {/* <label htmlFor=""></label> jsx 中htmlFor绑定对应的id */}
      </div>
      <p>我是p标签元素</p>
      {/* <Component1 /> */}

      <HookComponent/>



      {/* 路由配置 */}
      {/* Link一定要位置于BrowserRouter中 */}
      <div>
        {/* <Link to="/home">去首页</Link> */}
        <Link to={{pathname:"/home",search:"?name=lili"}}>去首页</Link>
        {/* <Link to="/about">去about页</Link> */}
        <NavLink activeStyle={{color:'red'}}  to="/about">去about页</NavLink>
      </div>
      <Switch>
        {/* 没有path，无论什么路径，都会匹配 */}
        {/* Switch 只渲染其中的一个  */}
        {/* <Route path="/info"  render={()=>isLogin?<Info/>:<Redirect to="/home" />}></Route> */}
        <Route path="/" exact component={Info}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about/:id" component={About}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      
      {/* <Route path="/render" render={()=>{
        //逻辑操作
        return <h1>我是render渲染的</h1>
      }}></Route>
       <Route path="/children" children={({match})=>{
         //逻辑操作  match匹配到的一些信息
        return <h1>我是children渲染的{match?match.path:""+match}</h1>
      }}></Route> */}


    {/* </Fragment> */}
    </>
    // </BrowserRouter>
  );
}

// //解析 实际上都是通过React.createElement来创建
// function App() {
//   const divtitle = "我是app"
//   const elemt = React.createElement(
//     "div",
//     {title:divtitle,className:'App'},
//     React.createElement('h2',null,"hello123 world")
//   )
//   return elemt
// }





//通过类的方式引入，类组件
// class App extends React.Component{
//   divTitle = "我是app";
//   render(){
//     return(
//       <div className="App" title={this.divTitle}>
//         <h1>hello world132</h1>
//       </div>
//     )
//   }
// }

export default withRouter(App);
