js 编译器  babel
@babel/cli   banel的命令行工具 
@babel/core  api都在上边
@babel/preset-env   es6+语法
babel-loader  转换器

@babel/polyfill  处理es6+ api（在业务上使用没有问题） 以全局变量的形势将方法注入。开发类库，ui库，造成全局变量的污染. 与 配合corejs
@babel/plugin-transform-runtime  （也是处理es6+ api）以闭包方式注入  保证全局环境不被污染.    配合@babel/runtime-corejs3




npm i @babel/core@7.7.5 @babel/preset-env@7.7.6 babel-loader@8.0.6 -D



----------------------------------------------------------------------------------------------
treeShaking 摇树优化   console。log（）  无用的代码， 依赖es6模块语法，如 lodash中 只用一些fun ，其他都不要


---------------------------------------------------------------
打包优化
1.入口配置：entry多入口
2.抽取公共代码：splitchunksPlugin

3.动态加载：按需加载，懒加载 ,现在已经支持，不需要 @babel/plugin-syntax-dynamic-import

---------------------------------------------------------
css代码分割
mini-css-extract-plugin  提取css
optimize-css-assets-webpack-plugin   压缩css



------------------------------------------------------------------
代码包分析工具
webpack-bundle-analyzer


------------------------------------
环境变量  
yargs