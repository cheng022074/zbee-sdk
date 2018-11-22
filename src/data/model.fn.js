
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
        }

        let {
            type,
            ...config
        } = this ;

        return include(type)(config) ;
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
