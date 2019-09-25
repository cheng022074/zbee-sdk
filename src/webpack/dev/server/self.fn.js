
/**
 * 
 * 单独的测试服务器配置
 * 
 * @require body-parser
 * 
 * @import is.function
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.defined
 * 
 * @param {mixed} app express 对象
 * 
 * @param {object} config 配置
 * 
 * @param {number} config.port 测试监听端口
 * 
 * @param {object} [config.services = {}] Express 服务配置
 * 
 * @param {boolean} [config.crossDomain = false] 是否进行跨域配置
 * 
 * @return {mixed} 返回说明 
 * 
 */

 const bodyParser = require('body-parser') ;

app.use(bodyParser.json());


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

        app[method](url , (req , res) => {

            if(crossDomain){

                res.header('Access-Control-Allow-Origin' ,'*');
            }

            res.end(fn(req.body)) ;

        }) ;
    }
}

app.listen(port) ;