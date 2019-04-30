
/**
 * 
 * 创建新的代理
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} proxy 数据代理
 * 
 * @return {mixed} 返回说明 
 * 
 */

 if(isString(proxy)){

    return include(`data.proxy.${proxy}`)() ;
 
}else if(isObject(proxy)){

    let {
        name,
        ...options
    } = proxy ;

    return include(`data.proxy.${proxy}`)(options) ;
 }

 return proxy ;