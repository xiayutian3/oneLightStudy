//ioc机制，应用awilix awilix-koa它里边的路由管理机制
import {route,GET} from 'awilix-koa'
import {Context} from 'koa'

//真假路由混合
@route("/api")
//依赖注入
class  IndexController{
  private lServer;
  constructor({lServer}){
    this.lServer = lServer
  }
  @route("/data2")
  @GET()
  async actionIndex(ctx:Context,next:()=>Promise<object>){
    //渲染首页html
    // ctx.body= await ctx.render('index')
    const result = await this.lServer.getData();
    ctx.body={
      result
    }
  }
}

export default IndexController