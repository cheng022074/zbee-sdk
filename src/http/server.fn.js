
/**
 * 
 * 构建一个后台服务
 * 
 * @import config::http.server
 * 
 * @import service from http.server.service
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {string} [name = 'default'] 服务配置名称
 * 
 */

const 
Koa = require('koa'),
app = new Koa(),
serverConfig = config('http.server' , name),
{
    keys
} = Object;

if(serverConfig){

    let {
        listen,
        services
    } = serverConfig ;

    if(services){

        let urls = keys(services) ;

        for(let url of urls){

            let config = services[url] ;

            if(config){

                if(isString(config)){

                    service(url , 'get' , config) ;
            
                }else if(isObject(config)){

                    let methods = keys(config) ;

                    for(let method of methods){

                        let serviceConfig = config[method] ;

                        if(isString(serviceConfig)){

                            service(url , method , serviceConfig) ;

                        }else if(isObject(serviceConfig)){

                            let {
                                params,
                                implement
                            } = serviceConfig ;
                            
                            service(url , method , implement , params) ;
                        }

                        service(url , method) ;
                    }
                }
            }
        }
    }

    app.listen(listen) ;
}