const webpack = require("webpack")
const path = require('path')
const {merge} = require("webpack-merge")
const baseConfig = require("./webpack.base")
const devConfig = {
  mode: 'development',
  devtool:"eval-cheap-module-source-map",
  devServer: {  //自动刷新
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 8080,
    // hot: true   //开启热莫更新
    // proxy:{    //配置代理
      // '/api':'local:8080'
    // }
  },
  plugins:[
    //热莫更新，webpack自带的模块
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(baseConfig,devConfig)

// module.exports = {
//   // 默认production 打包文件压缩  开发：development,不被压缩
//   // ugligyjsWebpackPlugin webpack3,还要配置，才能进行摇树优化
//   //  webpack4 直接配置mode: 'production',就可以进行摇树优化

//   mode: 'production',
//   // 入口文件
//   // entry:'./src/index.js', //一样
//   entry: {
//     // main: "./src/index.js"    //多入口配置
//     index:'./src/index.js',
//     demo:'./src/demo.js'
//   },
//   output: {
//     // filename: 'index.js', 自定义打包名字
//     // 占位符
//     filename:"[name].[hash:5].js",
//     path: path.resolve(__dirname, 'dist'),
//     // publicPath:"https://xxx.com/"   //可以进行插入文件的cdn 配置
//     // publicPath:"./"   //可以进行插入文件的cdn 配置
//   },
//   module: {
//     rules: [
//       {
//         test:/\.js$/,
//         loader:'babel-loader',
//         options:{
//           // presets:['@babel/preset-env']  // @babel/polyfill全部引入
//           // "presets": [             //@babel/polyfill  处理es6+ api， usage 按需引入  entry 只引入一次  false ，不会自动识别，将@babel/polyfil整个包引入
//           //   [
//           //     "@babel/preset-env",
//           //     {
//           //       "useBuiltIns": "usage",
//           //       // 必须设置corejs版本：3 默认使用 corejs：2，es的新特性都加在3上,安装下3版本
//           //       "corejs": 3
//           //     }
//           //   ]
//           // ],
//           //
//           //使用插件 @babel/plugin-transform-runtime 的方式     也可以搬到。babelrc文件
//           // plugins:[
//           //   [
//           //     "@babel/plugin-transform-runtime",
//           //     {
//           //       "corejs": 3,
//           //         // "target":'ie>8'
//           //     }
//           //   ]
//           // ]
//         },
//         exclude:/node_modules/   //排除目录
//       },
//       {
//         test: /\.(jpg|png|gif)$/,
//         use: {
//           loader: "url-loader",
//           options:{
//             //hash5 打包后的哈希值，可以处理缓存问题，.ext:文件的后缀
//             name:"[name].[hash:5].[ext]",
//             outputPath:'assets/',     //在出口的基础路径上，加上这个路径
//             limit: 608192,
//           }
//         }
//       },
//       {
//         test: /\.ttf$/,
//         use: {
//           loader: "file-loader",
//           options:{
//             //hash5 打包后的哈希值，可以处理缓存问题，.ext:文件的后缀
//             name:"[name].[hash:5].[ext]",
//             outputPath:'font/'     //在出口的基础路径上，加上这个路径
//           }
//         }
//       },
//       {
//         test: /\.less$/,
//         //从右到左 执行顺序
//         // use:["style-loader","css-loader","less-loader"],
//         //从下到上
//         use: [
//           {
//             //通过style标签将css直接注入到html页面
//             loader: "style-loader" // 从 JS 中创建样式节点
//           },
//           {
//             loader: "css-loader" // 转化 CSS 为 CommonJS
//           },
//           {
//             loader: 'postcss-loader',
//             // options: {         //配置到了postcss.config.js文件
//             //   plugins: [
//             //     require('autoprefixer')
//             //   ]
//             // }
//           },
//           {
//             loader: "less-loader" // 编译 Less 为 CSS
//           }
//         ]
//       }
//     ]
//   },
//   plugins:[
//     new HtmlwebpackPlugin({
//       template:'./index.html'
//     }),
//     new CleanWebpackPlugin(),
//     //热莫更新，webpack自带的模块
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   devtool:"none",
//   // devtool:"eval-cheap-module-source-map",   //dev环境 推荐 "eval-cheap-module-source-map"  pro环境 推荐 "cheap-module-source-map"
//   devServer: {  //自动刷新
//     contentBase: path.join(__dirname, 'dist'),
//     // compress: true,
//     port: 8080,
//     // hot: true   //开启热莫更新
//     // proxy:{    //配置代理
//     //   '/api':'local:8080'
//     // }
//   }
 
// }

// file-loader:流程
// 1.发现图片模块
// 2.打包到dist目录下，改一个名字，名字可以自定义
// 3.移动到dist目录下之后，得到图片的名称
// 4.然后作为返回值，返回给我们引入的变量