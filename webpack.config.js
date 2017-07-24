const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rmdir = require('rmdir')

const NODE_ENV = process.env.NODE_ENV || 'production'

rmdir('./dist')

// Configuration Plugins
const DesinePluginConfig = new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) }
})

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Storm App',
  template: './template/index.html',
  filename: 'index.html',
  inject: true
})

const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    unsafe: true,
    unsafe_comps: true
  },
  output: {
    comments: false
  },
  sourceMap: true
})

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    DesinePluginConfig,
    UglifyJsPluginConfig,
    HtmlWebpackPluginConfig
  ]
}
