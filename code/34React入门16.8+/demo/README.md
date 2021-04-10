# 非dom属性以及如何使用
dangerousSetInnerHTMl === innerHTML
  xss 
  {__html:'<p>我是插入的文本</p>'}

ref
  id
  不能再函数组件上使用
  函数内部使用


key
  提高渲染机制，唯一标识  （index 不推荐）



# 什么是props
  组件 props state

如何使用
  props对外的接口，接受外部传入的数据 只读
    react数据流单向的  组件的复用性， 不可预测 违背组件的设计原则
    中间人 state

  定义方式
    函数组件 props 无状态组件
    类组件 state 生命周期 有状态 无状态 class

  --父子传值
    父-子
    子-父
    props 任意类型  函数实现

事件监听this的绑定
  this四种绑定方式
    箭头函数
    construtor  bing绑定
    箭头函数（在标签中）
    construtor  bing绑定（在标签中）




# state
  setState
    setState异步更新，不会立马更新组件，批量延迟更新 多个setState调用  合并处理  高效更新
      react控制的事件处理程序（onClick，onChang。。） 生命周期的狗子函数  不会同步更新state  异步

    setState同步更新
      原生的js绑定事件  setTimeout






# 受控组件与非受控组件
表单
  受控组件
    依赖状态，默认值实时映射到状态 state
    必须使用onChange
    双向绑定
    优点
      符合react的数据流
      修改使用更加方便，完全不需要获取dom
      便于数据的处理


  非受控组件
    不受控制 获取dom，操作dom ref

    好处很容易与第三方组件结合






# react事件传参
  <button onClick={this.handleBtnClick.bind(this,123456)}>传递参数</button>
  <button onClick={(e)=>this.handleBtnClick(123456,e)}>传递参数</button>





# react hook
  为什么要使用hook
    代码更加简单
    上手更加简单
      react上手不容易，主要是？
        1.生命周期难以理解，很难熟练应用
        2.Redux 状态管理，概念多，难以理解，中文文档
        3.高阶组件理解起来不容易，必须掌握，似懂非懂
        4.优秀的解决方案，都在react社区

      hook学习成本降低
        1.生命周期可以不用学
        2.高阶组件不用学
        3.redux也不在是必须品，mobx上手非常容易

    开发体验非常好
      可以让函数组件维护内部的状态



hook核心概念与应用
  useState
    每次渲染，函数都会重新执行，函数执行完毕，所有的内存都会被释放，
    在函数内部创建一个当前的函数组件的状态，提供一个修改状态的方法
    useState（10）=》[count,setCount]
  useEffect
    总会执行一些副总用操作，函数组件，纯函数，props，固定的输入总会得到固定的输出
    什么是副作用？
      只想渲染一个dom-》dom渲染完了，还想执行一段逻辑（副作用）
      没有发生在数据向视图转换过程中的逻辑
      ajax 访问原生dom对象 ，定时器
      需要清除的，不需要清除的
      hook之前，副作用都是不被允许的
    useEffect componentDidMound componentDidUpdate 相同的用途 合并成api
    useEffect（fn） 组件渲染到屏幕之后才会执行 返回 一个清除副作用的函数  不返回
    一般不需要同步的，  需要同步 useLayoutEffect 
    如何清除副作用？
      componentwillUnmount（类组件中）
      返回 一个清除副作用的函数

  useContext
    16更新content api
      context 爷孙组件传值
    useContext 使用context的能力
    顶层组件 
    context和useContext组件间的状态共享问题  redux

  useReducer
    redux
    useState内部就是靠useReducer实现的
    useState的替代方案 （state，action）=》newState
    接受三个参数 state，配套的dispatch

  useCallback
    计算的缓存，记忆函数
    接受一个内联回调函数和一个依赖项数组（和useEffect类似）
  useMemo
    计算的缓存，记忆函数
    把创建函数和依赖项数组作为参数传入useMemo（和useEffect类似）
  useRef
    16版本中 React.createRef 创建ref的方法
    {current：""}
    可以多次使用
    访问dom节点，useEffect去操作dom节点

  自定义Hook
    逻辑功能相同的片段-》封装成单独的函数来使用
    自定义hook 函数
    自定义hook中可以调用官方提供的hook useState 。。
    use开头 表示只能在函数组件中进行使用
      use开头 
      render props 高阶组件 redux
      复用状态逻辑的方式，而不是复用state本身
      事实上hook每次调用都有一个独立的state
    抽离公共代码

hook使用规则
  1.只能在最顶层使用hook
    不要再循环，条件，嵌套函数中调用hook
  2.只在react函数中调用hook






#react router快速入门
  v5 v4 v3 v2 
  v4/v5 用法和理念基本是一致的   v3/v2 差异较大
  版本差异
    v4和v4前的版本比较
      v4：稳定版，大多数项目，v4属于动态路由
        react-router：
          react-router，：路由基础库
          react-router-dom，：适用于浏览器环境的再次封装
          react-router-native，：适用于react-native环境的再次封装
          react-router-config：静态路由配置助手

      之前：静态路由

    v5 vs v4
      v5:完全兼容v4
        支持react16，兼容react router4
        消除了严格模式的警告
        适用于create-react-context 实现context api
    v4.4 ^react-router:"^4.3.1: 导致报错 v5
    稳定性与兼容性
    改进与新特性
      》=15 react版本的完全兼容，react16提供更好的支持
      升级了react context api ，消除了严格模式的警告
      引入了预优化build process.env.NODE_ENV

      import Router from 'react-router/Router'

      import {Router,Switch} from 'react-router'

      <Route path="user/:id" component={User}>
      <Route path="info/:id" component={User}>
      新特性，path 可以是数组 ，匹配其中一个就渲染组件
      <Route path={["user/:id","info/:id"]} component={User}>
      <Link innerRef> <Route component> 使用React.forwardRef

      目前react router 中已经不需要路由配置，现在一切皆组件



前端路由
  原理：检测浏览器url的变化，截获url地址，然后经行url路由匹配
  hash：描点 hashchange
    刷新页面，不会发请求
  html5：history
    pushState（）
    replaceState（）
    onpopstate事件
    注意：页面刷新的时候，浏览器会向服务器发送请求

第一个基础的路由配置
  HashRouter
  BrowerRouter Route

react router 常见的概念
  Router组件
    每个router都会创建一个history对象，用来保存当前的位置的追踪
    web 
      HashRouter 只处理静态url
      BrowerRouter 非静态的站点，要处理不同的url
    react native
      MenoryHistory
  Route组件
    只是一个具有渲染方法的普通react组件，路由匹配成功渲染该组件
    常用的属性
      path：'' 路由匹配规则 可以省略，字符串类型
      exact：boolean 严格模式 true
      component：渲染的组件
      render：函数形势 逻辑操作， path匹配的时候执行
      children：函数形势 逻辑操作，任何时候都会执行  match{} null
      children 》 component 》 render
    
  Switch组件
    最多只能取出一个文具
    最多只能匹配一个组件
    作用，可以将Route组件分组
    404页面的渲染

  Link与NavLink组件
    声明式的可访问导航 
    to：string类型  ，对象类型 {pathname,search,hash,state}
    replace:boolean true  替换当前的历史记录
    NavLink
      特殊版的Link ，当匹配的时候可以添加样式
      activeClassName  activeStyle
      exact 严格模式

  Redirect组件
    重定向组件 to是必须的
    to：字符串，对象
    push：boolean true  history.push、
    from ：将要进入的url
    exact：true


  History对象
    每个router都会创建一个history对象，用来保存当前的位置的追踪
    编程式导航
      push

  withRouter组件
    没有经过路由的匹配
    让浏览器直接打开的地址 也有props.history   history对象
    包裹 app组件  withRouter(App);

动态路由
  路由规则不是预先确定的，在渲染过程中确定
  info/1  info/2
  :id
  props.match.params.id

嵌套路由
  二级路由







#redux 
  redux react-redux
  
  组件间的数据传递，共享。connect函数  react和redux的连接
  redux可以将数据连接到任何组件中
    connect函数
  action 描述动作，指令。type {type：'add'} ，单独的模块，文件来存放action（项目规模变大以后）
  进行拆分数据处理逻辑-》不应该拆分store，应该拆分reducer -》 combineReducers，再合并reducer

redux的三大原则
  1.单一数据源
  2.state是只读的
  3.reducer使用纯函数执行修改

实际redux应用 副作用
  redux-thunk ，进行不纯的操作,增强action
  thunk action




















