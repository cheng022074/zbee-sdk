
/**
 * 
 * 单页面 Webpack 测试配置
 * 
 * @import base from .base
 * 
 * @require webpack-merge
 * 
 * @require mini-css-extract-plugin
 * 
 * @require html-webpack-plugin
 * 
 * @require css-loader
 * 
 * @param {object} options 配置
 * 
 * @param {string} options.context 工程目录
 * 
 * @return {object} Webpack 配置 
 * 
 */

const {
    merge
} = require('webpack-merge'),
MiniCssExtractPlugin = require('mini-css-extract-plugin'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
{
    join
} = require('path');
  
return merge(base({
    context
}) , {
    mode:'production',
    devtool: 'inline-source-map',
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    optimization:{
        minimize:false
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:join(context , 'public/index.html'),
            minify:false
        })
    ]
}) ;