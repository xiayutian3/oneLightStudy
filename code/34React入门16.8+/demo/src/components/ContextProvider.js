import React, {createContext,useState} from 'react'
//顶层组件

export const context = createContext({})
export function ContentProvider({children}){
  const [count,setCount] = useState(10)
  const conutVal = {
    count,
    setCount,
    add:()=>setCount(count+1),
    reducer:()=>setCount(count-1)
  }
  // context对象提供一个自带的Provider组件  useContext
  return <context.Provider value={conutVal}>{children}</context.Provider>
}