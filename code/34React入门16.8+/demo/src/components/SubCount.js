import React,{useContext} from 'react'
import {context,ContentProvider} from './ContextProvider'
import {context2,ContentProvider2} from './ContextProvider2'

//useContext 使用,爷孙组件传递

function SubCount(){
  const {count=0,add,reducer} = useContext(context)
  const {val=10} = useContext(context2)
  return (
    <div>
      <p>ContentProvider2:{val}</p>
      <h1>
        我是subcount组件
      </h1>
      <p>ContentProvider:{count}</p>
      <button onClick={add}>加</button>
      <button onClick={reducer}>减</button>
    </div>
  )
}

const SubCountComp =()=>(
  <ContentProvider2>
    <ContentProvider>
      <SubCount/>
    </ContentProvider>
  </ContentProvider2>
)

export default SubCountComp