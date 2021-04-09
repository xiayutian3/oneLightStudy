import React,{useState,useEffect,useRef,useMemo,useCallback} from 'react'
import SubCount from './SubCount'
import ReducerComponent from './ReducerComponent'
//自定义的hook实现
import {useNumber} from './useNumber'

function HookComponent(){

  // let [count,setCount] = useState(0) //hook,函数是组件，中的setCount回调是异步的
  
  const inputEl = useRef(null)

  // eslint-disable-next-line no-unused-vars
  const [dyNumber,setDyNumber] = useNumber()
  // console.log('自定义的hookuseNumber',dyNumber,setDyNumber)

  const num = 2
  //useState 传任意类型
  let [count,setCount] = useState(()=>{
    return 10*num
  })
  //useState 可以使用多次
  let [number,setNumber] = useState(100)

  //dom渲染结束后才会执行    useEffect可以定义多个
  useEffect(()=>{
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  },[])
  useEffect(()=>{
    // ajax请求

    // setTimeout(()=>{
    //   setCount(count=>{
    //     return ++count
    //   })
    // },1500)

    console.log('我是副作用函数')
    //1.组件卸载前
    //2.下一个effect前
    function clear(){
      //清理工作
      console.log('我是清理函数')
    }
    return clear
    
   //浅比较，阻止再次执行副作用
   //定义第二个参数，告诉react不依赖与props，state 
  },[])
  /*
    1.dom渲染完成，副作用执行，useEffect
    2.副作用执行过成功中，修改了count，state状态被修改，重点
    3.state改变-》引发重新渲染
    4.无限循环
  */



  function handleAdd(){
    // count++
    // 接受的值是任意类型，修改state中的值，state的改变是异步的
    // setCount(count) 
    setCount(count=>{
      return ++count
    })

    console.log(number,setNumber)
  }

  // const onButtonClick = () => {
  //   // `current` 指向已挂载到 DOM 上的文本输入元素
  //   inputEl.current.focus();
  // };

 //一定要写依赖项数组 useCallback  useMemo，不然就不记忆了
  const memorized = useCallback(()=>{
    return count;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[number])
  const memorized2 = useMemo(()=>{
    return count;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[number])

  console.log('记忆',memorized())
  console.log('记忆2',memorized2)
  console.log('原始',count)

  function changeNum(){
    setNumber((num)=>{
      return ++num
    })
  }



  return (
    <div>
      <h1>我是hook组件</h1>
      <p>state值--{count}</p>
      <button onClick={handleAdd}>点击加1</button>
      <SubCount/>
      <ReducerComponent/>
      <div>
        <input ref={inputEl} type="text" />
        {/* <button onClick={onButtonClick}>Focus the input</button> */}
      </div>
      <div onClick={changeNum}>改变number的值</div>
    </div>
  )
}

export default HookComponent
