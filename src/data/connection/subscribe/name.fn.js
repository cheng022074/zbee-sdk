
/**
 * 
 * 获取订阅器名称
 * 
 * @param {string} name 订阅器名称
 * 
 * @param {string} [connectionId] 对象标识
 * 
 * @return {string} 订阅器名称
 * 
 */

if(connectionId){

    return `${name}<${connectionId}>` ;
}

return name ;