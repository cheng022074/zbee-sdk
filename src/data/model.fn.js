
/**
 * 
 * 数据模型
 * 
 * @import getModel from model
 * 
 * @import defineProperty from object.property.define
 * 
 * @import data.reader.json
 * 
 * @import data.proxy.memory
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
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

        defineProperty(this , 'proxy') ;
    }

    getProxy(){

        let config = this.getProxyConfig() ;

        if(isString(config)){

            return include(config)() ;
        
        }else if(isObject(config)){

            let {
                type,
                ...config
            } = this ;
    
            return include(type)(config) ;
        }

        throw new Error(`${config} 不是一个合法的数据代理配置`) ;
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
        } = me,
        data = reader.readOne(await proxy.findOne(config)) ;

        if(data){

            me.initData(data) ;
        }
    }
}
