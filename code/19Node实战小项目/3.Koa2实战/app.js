const Koa = require('koa');
const router = require('koa-simple-router')
var render = require('koa-swig'); //模板引擎swig
// koa v2.x  设置模板引擎swig需要用到
var co = require('co');  
const serve = require('koa-static');
const path = require('path')
const app = new Koa();

//设置静态资源目录
app.use(serve(__dirname + '/public'));

//使用模板引擎 koa2x
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}))
//使用模板引擎swig
// app.use(async ctx => ctx.body = await ctx.render('index'));


// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });
// koa-simple-router 的使用
app.use(router(_ => {
  _.get('/', (ctx, next) => {
    ctx.body = 'hello'
  })
  _.get('/index', async(ctx, next) => {
    // ctx.body = {
    //   data:123
    // }

    //使用模板引擎swig
    ctx.body = await ctx.render('index')
  })
}))

app.listen(3001);