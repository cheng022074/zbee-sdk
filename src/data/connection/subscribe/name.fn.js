
/**
 * 
 * 获取订阅器名称
 * 
 * @param {string} name 订阅器名称
 * 
 * @param {string} [namespace] 命名空间s
 * 
 * @return {string} 订阅器名称
 * 
 */

if(connectionId){

    return `${name}<${namespace}>` ;
}

return name ;