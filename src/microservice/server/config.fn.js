
/**
 * 
 * 处理传入的服务器配置
 * 
 * @param {object} config 服务器配置
 * 
 * @return {object} 处理后的服务器配置 
 * 
 */

 let {
    port = 8080
 } = config ;

 return {
     port
 } ;