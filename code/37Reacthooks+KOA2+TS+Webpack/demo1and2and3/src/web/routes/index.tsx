import React, { Suspense,lazy } from 'react';
import {Switch,RouterProps,Route} from 'react-router-dom'

const Home = lazy(()=>import(/**webpackChunkName:"home"*/"../components/home/index"))
const Test = lazy(()=>import(/**webpackChunkName:"test"*/"../components/test/index"))
// console.log('Test',Test)

const routes:RouterProps[] = [
  {
    path:'/',
    exact:true,
    component:Home
  },
  {
    path:'/test',
    exact:true,
    component:Test
  }
]
const Routes = ()=>(
  <Suspense fallback={<i>loading...</i>}>
    <Switch>
        {
          routes.map(item=>{
            const {path,exact,component} = item
            // console.log('route',path,exact,component)
            // 将来做状态管理可能用到 LazyCom component
            const LazyCom = component 
            return (
              <Route key={path} path={path} exact={exact} render={()=><LazyCom/>}></Route>
              // <Route key={path} path={path} exact={exact} component={LazyCom}></Route>
            )
          })
        }
    </Switch>
  </Suspense>
)


export default Routes


