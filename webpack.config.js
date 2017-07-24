// require('rmdir')('./dist')

const nodeEnv = process.env.NODE_ENV || 'production'

const webpack = require('webpack')
const path = require('path')

// Import plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Configuration Plugins
const DesinePluginConfig = new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
})

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Storm App',
  template: './template/index.html',
  filename: 'index.html',
  inject: true
})

const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
  compress: {
    dead_code: true,
    unused: true,
    warnings: false
  },
  output: {
    comments: false
  },
  sourceMap: true
})

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'main.css',
  options: {
    publicPath: './dist/stylesheets/'
  }
})

module.exports = {
  devtool: nodeEnv === 'development' ? 'source-map' : '@cheap-source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          loader: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 9000
  },
  plugins: [
    DesinePluginConfig,
    UglifyJsPluginConfig,
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ]
}
