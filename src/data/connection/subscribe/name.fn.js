
/**
 * 
 * 获取订阅器名称
 * 
 * @param {string} name 订阅器名称
 * 
 * @param {string} [instanceId] 对象标识
 * 
 * @return {string} 订阅器名称
 * 
 */

if(instanceId){

    return `${name}<${instanceId}>` ;
}

return name ;