const argv = require("yargs-parser")(process.argv.slice(2))
// console.log(argv)
const _mode = argv.mode || "development"
const _mergeConfig = require(`./config/webpack.${_mode}`)
const {merge} = require("webpack-merge")
const { CheckerPlugin } = require('awesome-typescript-loader')
const {resolve} = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  entry:{
    app:resolve("./src/web/index.tsx")
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
      new CheckerPlugin(),
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: 'src/web/index.html'
      })
  ]
}

module.exports = merge(webpackConfig,_mergeConfig)
