
/**
 * 
 * 处理服务端配置信息
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} server 服务端配置
 * 
 * @return {object} 处理后的服务端配置
 * 
 */

let uris = Object.keys(server),
    result = {};

const {
    join
} = require('path'),
rootPath = process.cwd();

for(let uri of uris){

    let service = server[uri] ;

    if(isString(service)){

        service = {
            method:'get',
            params:[],
            source:require(join(rootPath , service))
        } ;
    
    }else if(isObject(service)){

        let {
            method = 'get',
            params = [],
            source = () => {},
        } = service ;

        service = {
            method,
            params,
            source
        } ;
    }

    if(isObject(service)){

        result[uri] = service ;
    }
}

return result ;

