
/**
 * 
 * 数据模型
 * 
 * @import getModel from model
 * 
 * @import defineProperties from object.properties.define
 * 
 * @import data.reader.auto
 * 
 * @import data.proxy.memory
 * 
 * @import is.string
 * 
 * @return {model.Data} 数据模型 
 * 
 * @once
 * 
 */

function getTarget(methodName){

    let config = this[methodName]() ;

    if(isString(config)){

        return include(config)() ;
    }

    let {
        type,
        ...config
    } = this ;

    return include(type)(config) ;
}

class Model extends getModel(){

    constructor(){

        super() ;

        defineProperties(this , [
            'reader',
            'writer',
            'proxy'
        ]) ;
    }

    getReader(){

        return getTarget.call(this , 'getReaderConfig') ;
    }

    getReaderConfig(){

        return 'auto' ;
    }

    getProxy(){

        return getTarget.call(this , 'getProxyConfig') ;
    }

    getProxyConfig(){

        return 'memory' ;
    }

    async load(config){

        let 
        me = this,
        {
            reader,
            proxy
        } = me;

        let result = reader.read(await proxy.findOne(config)) ;

        if(result.length){

            me.initData(result[0]) ;
        }
    }
}
