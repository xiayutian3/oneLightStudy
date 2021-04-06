// import logo from './logo.svg';
import React,{Fragment} from 'react';
import './assets/css/App.css';
// import Component1 from './components/Component1'
import HookComponent from './components/HookComponent'




// 根组件  函数组件
function App() {

  const divtitle = "我是app"
  // dataid="1"  dataid不能小驼峰命名，这是规定
  return (
    // <Fragment> 不引入Fragment，也可以使用 <></>来代替
    <>  
      <div title={divtitle} className="App" dataid="1">
        <h1>hello world</h1>
        {/* <label htmlFor=""></label> jsx 中htmlFor绑定对应的id */}
      </div>
      <p>我是p标签元素</p>
      {/* <Component1 /> */}

      <HookComponent/>


    {/* </Fragment> */}
    </>
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

export default App;
