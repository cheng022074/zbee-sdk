
/**
 * 
 * 内存数据代理
 * 
 * @import getProxy from data.proxy
 * 
 * @import from from array.from
 * 
 * @param {object} [config = {}] 参数配置
 * 
 * @param {object} [config.api] API设置
 * 
 * @param {mixed} [config.data] 内存数据
 * 
 * @return {data.proxy.Memory} 内存数据代理实例引用
 * 
 * 
 */

class Memory{

    constructor(config){

        let {
            data
        } = config ;

        me.data = data ;
    }

    find(){

        let me = this,
        {
            data
        } = me;

        return me.getAPIConfigItem('find' , 'reader').read(data) ;
    }

    findOne(){

        let me = this,
        {
            data
        } = me;

        return me.getAPIConfigItem('findOne' , 'reader').read(data) ;
    }
}

function main(config){

    return new Memory(config) ;
}
