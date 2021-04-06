import React,{createContext,useState} from 'react'
//顶层组件

export const context2 = createContext({})
export function ContentProvider2({children}){
  const [val,setVal] = useState(20)
  const conutVal = {
    val,
    setVal
  }
  // context对象提供一个自带的Provider组件  useContext
  return <context2.Provider value={conutVal}>{children}</context2.Provider>
}