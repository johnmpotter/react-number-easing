const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({  
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body',
  hash: 'true',
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    open: true,
    contentBase: './',
    noInfo: true,
    port: 3000,
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  resolve: {
    extensions: ['.js','.jsx']
  }
}