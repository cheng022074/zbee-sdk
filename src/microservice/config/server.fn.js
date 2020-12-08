
/**
 * 
 * 处理服务端配置信息
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @param {object} server 服务端配置
 * 
 * @return {object} 处理后的服务端配置
 * 
 */

const {
    join
} = require('path'),
rootPath = process.cwd();

function main(server){

    let uris = Object.keys(server),
        result = {};

    for(let uri of uris){

        let service = server[uri],
            method,
            params,
            source;
    
        if(isString(service)){

            method = processMethod('get') ;

            params = [] ;
    
            source = processSource(service) ;
        
        }else if(isObject(service)){
    
            source = processSource(service.source) ;

            method = processMethod(service.method) ;

            params = processParams(method , service.params) ;

        }
    
        if(method && params && source){
    
            result[uri] = {
                method,
                params,
                source
            } ;
        }
    }
    
    return result ;
}

function processSource(source = () => {}){

    if(isString(source)){

        return async (...args) => await require(join(rootPath , source))(...args) ;
    
    }else if(isFunction(source)){

        return source ;
    }

    return () => {} ;
}

function processMethod(method = 'get'){

    switch(method){

        case 'delete':

            return 'del' ;

        case 'post':
        case 'put':
        case 'get':

            return method ;
    }

    return 'get' ;
}

function processParams(method , params = []){

    let result = [] ;

    for(let param of params){

        if(isString(param)){

            result.push({
                target:getDefaultParamTarget(method),
                property:param
            }) ;
        
        }else if(isObject(param)){

            let {
                target = getDefaultParamTarget(method),
                property
            } = param ;

            result.push({
                target,
                property
            }) ;
        }
    }

    return result ;
}

function getDefaultParamTarget(method){

    switch(method){

        case 'get':
        case 'del':

            return 'query' ;

        case 'post':
        case 'put':

            return 'body' ;
    }
}

