
/**
 * 
 * 数据模型
 * 
 * @import getModel from model
 * 
 * @import defineProperty from object.property.define
 * 
 * @import getProxy from data.proxy
 * 
 * @return {model.Data} 数据模型 
 * 
 * @once
 * 
 */

 const Proxy = getProxy() ;

class Model extends getModel(){

    constructor(){

        super() ;

        defineProperty(this , 'proxy') ;
    }

    getProxy(){

        return Proxy.create(this.getProxyConfig()) ;
    }

    getProxyConfig(){
    }

    async load(config){

        let 
        me = this,
        {
            proxy
        } = me ;
        
        me.initData(await proxy.findOne(config)) ;
    }
}
