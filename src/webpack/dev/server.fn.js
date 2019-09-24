
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
 * @require body-parser
 * 
 * @import is.function
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.defined
 * 
 * @param {object} config 配置
 * 
 * @param {object} config.webpackConfig Webpack 配置
 * 
 * @param {string} config.entry 引导脚本路径
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
            entryPath
        ],
        mode:'development',
        plugins:[
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
     })),
    express = require('express'),
    bodyParser = require('body-parser'),
    {
        join
    } = require('path');

let app = express();

app.use(bodyParser.json());

app.use(devMiddleware(compiler));

app.use(hotMiddleware(compiler)) ;

let urls = Object.keys(services) ;

for(let url of urls){

    let service = services[url],
        method,
        fn;

    if(isFunction(service)){

        method = 'get' ;

        fn = service ;
    
    }else if(isObject(service)){
        
        method = service.method ;

        fn = service.fn ;
    }

    if(isDefined(method)){

        app[method]((req , res) => res.end(fn(req.body))) ;
    }
}

app.listen(port , () => console.log('请访问' , `http://localhost:${port}`)) ;