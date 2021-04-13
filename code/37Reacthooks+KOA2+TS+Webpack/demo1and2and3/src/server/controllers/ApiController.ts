//ioc机制，应用awilix awilix-koa它里边的路由管理机制
import {route,GET} from 'awilix-koa'
import {Context} from 'koa'


@route("/api")
//依赖注入
class  ApiController{
  private indexService;
  constructor({indexService}){
    this.indexService = indexService
  }
  @route("/data")
  @GET()
  async actionData(ctx:Context,next){
    // const result = await Promise.resolve("hello world")
    const result = await this.indexService.getData();
    ctx.body={
      result
    }
  }
}

export default ApiController