
/**
 * 
 * Webpack 测试服务器
 * 
 * @require webpack
 * 
 * @require webpack-dev-middleware
 * 
 * @require webpack-hot-middleware
 * 
 * @require webpack-merge
 * 
 * @require express
 * 
 * @import start from .server.self
 * 
 * @param {object} config 配置
 * 
 * @param {object} config.webpackConfig Webpack 配置
 * 
 * @param {array} config.entry 引导脚本路径
 * 
 * @param {number} config.port 测试监听端口
 * 
 * @param {object} [config.services = {}] Express 服务配置
 * 
 */

const webpack = require('webpack'),
      devMiddleware = require('webpack-dev-middleware'),
      hotMiddleware = require('webpack-hot-middleware'),
      merge = require('webpack-merge'),
      compiler = webpack(merge(webpackConfig , {
        entry:[
            'webpack-hot-middleware/client?noInfo=true&reload=true' ,
            ...entry
        ],
        mode:'development',
        plugins:[
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
     })),
    express = require('express');

let app = express();

app.use(devMiddleware(compiler));

app.use(hotMiddleware(compiler)) ;

start(app , {
    port,
    services
}) ;