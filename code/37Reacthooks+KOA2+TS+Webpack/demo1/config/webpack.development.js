const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback:true,
    compress: true,
    hot: true,
    port: 9000,
    quiet: true
  },
  plugins:[
    new WebpackBuildNotifierPlugin({
      title: "My Webpack Project",
      // logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true, // don't spam success notifications
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      }
    })
  ]
};