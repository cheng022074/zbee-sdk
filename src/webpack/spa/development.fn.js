
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
 * @param {object} options 配置
 * 
 * @param {string} options.context 工程目录
 * 
 * @param {string} options.htmlPath 页面路径
 * 
 * @param {string} [...options.options] 其它配置
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
  
 return merge(base({
   context,
   ...options
 }) , {
    mode:'development',
    devtool: 'inline-source-map',
    devServer:{
      contentBase:'./dist'
    },
    plugins:[
      new HtmlWebpackPlugin({
          template:join(context , htmlPath)
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