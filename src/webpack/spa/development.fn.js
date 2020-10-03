
/**
 * 
 * 单页面 Webpack 开发配置
 * 
 * @import base from .base
 * 
 * @require webpack-merge
 * 
 * @require html-webpack-plugin
 * 
 * @require style-loader
 * 
 * @require css-loader
 * 
 * @return {object} Webpack 配置 
 * 
 */

const {
    merge
  } = require('webpack-merge'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  {
    join
  } = require('path');
  
  module.exports = merge(base() , {
    mode:'development',
    devtool: 'inline-source-map',
    devServer:{
      contentBase:'./dist'
    },
    plugins:[
      new HtmlWebpackPlugin({
          template:join(__dirname , '../public/index.html')
      })
    ],
    module:{
      rules:[{
          test:/\.css$/,
          use:[
              'style-loader',
              'css-loader'
          ]
      }]
    }
  }) ;