// 自定义hook 实现

import {useEffect,useState} from 'react'

export function useNumber(){
  let [dyNumber,setDyNumber] = useState(30)
  useEffect(()=>{
    setTimeout(()=>{
      setDyNumber(()=>dyNumber+1)
    },1000)
    // 只执行一次
    // eslint-disable-next-line
  },[]);
  return [dyNumber,setDyNumber]
}