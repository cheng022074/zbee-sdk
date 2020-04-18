
/**
 * 
 * 把数据加工成 Proxy , 如果配置允许的话
 * 
 * @import create from .data.proxy.create scoped
 * 
 * @param {mixed} data 数据
 * 
 * @return {mixed} 加工后的数据 
 * 
 */

let {
        isUseProxy
    } = this ;

if(isUseProxy){

    return create(data) ;

}

return data ;