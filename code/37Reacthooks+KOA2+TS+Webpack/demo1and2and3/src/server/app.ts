// ioc的BFF 架构
import Koa from "koa"
import serve from 'koa-static';
import render from 'koa-swig'
import co from 'co' //转成async await
// 或者当你使用 ES6 语法，你可以这样（除了api请求路由，其他路径交给前端处理）
import { historyApiFallback } from 'koa2-connect-history-api-fallback';
/**
 * 创建容器进行了依赖注入 ioc机制
*/
import {createContainer,Lifetime} from 'awilix'
import {scopePerRequest,loadControllers} from 'awilix-koa'
import path from "path"


const app = new Koa()

// or use absolute paths 静态资源目录设置
app.use(serve(__dirname + '/assets'));
//模板渲染koa-swig，挂在render方法
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  // cache: 'memory', // disable, set to false
  cache: false, // disable, set to false
  ext: 'html',
  writeBody: false
}));

//加载 所有的services目录，做注入
const container = createContainer()
container.loadModules([__dirname+"/services/*.ts"],{
  //以什么样的形态去load(加载)
  formatName:"camelCase", //骆驼拼写法
  resolverOptions:{ //这个生命周期，每次都帮我们去重新创建一个类
    lifetime:Lifetime.SCOPED   //单例模式，每次都帮我们去创建一个新的实例
  }
})

// handle fallback for HTML5 history API （除了api请求路由，其他路径交给前端处理）
//注意顺序，写在node的controller之前
// 告诉它根组件是什么，不然还是会落到node服务上，由node处理
app.use(historyApiFallback({ index:"/",whiteList: ['/api'] }));

//跟koa融合起来,
//每次请求，所有的service都注入到容器里了
app.use(scopePerRequest(container));
//再把容器里的东西交给controller
app.use(loadControllers(__dirname+"/controllers/*.ts"));






app.listen(3000,()=>{
  console.log("服务启动成功")
})