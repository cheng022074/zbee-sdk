
/**
 * 
 * 单页面 Webpack 生产配置
 * 
 * @import base from .base
 * 
 * @require webpack-merge
 * 
 * @require mini-css-extract-plugin
 * 
 * @require terser-webpack-plugin
 * 
 * @require optimize-css-assets-webpack-plugin
 * 
 * @require html-webpack-plugin
 * 
 * @require css-loader
 * 
 * @return {object} Webpack 配置 
 * 
 */

const {
    merge
} = require('webpack-merge'),
MiniCssExtractPlugin = require('mini-css-extract-plugin'),
TerserJSPlugin = require('terser-webpack-plugin'),
OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
  {
    join
  } = require('path');
  
  return  merge(WebpackConfig , {
    mode:'production',
    optimization: {
      minimizer: [
        new TerserJSPlugin(),
        new OptimizeCSSAssetsPlugin()
      ],
      splitChunks:{
        chunks:'all'
      }
    },
    module:{
      rules:[{
          test:/\.css$/,
          use:[
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
      }]
    },
    plugins:[
      new HtmlWebpackPlugin({
          template:join(__dirname , '../public/index.html')
      }),
      new MiniCssExtractPlugin()
    ],
    performance:{
        hints:false,
        assetFilter(){

          return false ;
        } 
    }
  }) ;