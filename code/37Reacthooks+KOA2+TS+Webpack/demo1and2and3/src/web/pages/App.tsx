import React from 'react'
import Routes from '../routes/index'
import {BrowserRouter} from 'react-router-dom'

const App = ()=>{
  // console.log('Routes',Routes())
  return (
    <BrowserRouter basename="/">
      {Routes()}
    </BrowserRouter>
  )
}

export default App
