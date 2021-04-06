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


