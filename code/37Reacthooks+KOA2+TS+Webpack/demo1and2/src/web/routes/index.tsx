import React, { Suspense,lazy } from 'react';
import {Switch,RouterProps,Route} from 'react-router-dom'

const Home = lazy(()=>import(/**webpackChunkName:"home"*/"../components/home/index"))

const routes:RouterProps[] = [
  {
    path:'/',
    exact:true,
    component:Home
  }
]
const Routes = ()=>(
  <Suspense fallback={<i>loading...</i>}>
    <Switch>
        {
          routes.map(item=>{
            const {path,exact,component} = item
            // 将来做状态管理可能用到 LazyCom component
            const LazyCom = component 
            return (
              <Route key={path} path={path} exact={exact} render={()=>(<LazyCom></LazyCom>)}></Route>
            )
          })
        }
    </Switch>
  </Suspense>
)


export default Routes


