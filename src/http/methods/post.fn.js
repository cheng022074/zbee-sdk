
/**
 * 
 * 发起 POST 请求并获得返回数据
 * 
 * @import parse from http.params.parse
 * 
 * @param {string} uri 请求名称
 * 
 * @param {object} [params] 请求配置信息
 * 
 * @return {Promise} 
 * 
 */

return require('request-promise')(parse(uri , 'post' , params)) ;
