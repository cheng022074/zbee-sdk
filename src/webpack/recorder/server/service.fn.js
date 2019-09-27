
/**
 * 
 * 服务记录器
 * 
 * @import recorder from webpack.recorder.server
 * 
 * @param {string} name 文档名称
 * 
 * @param {function} processFn 处理函数
 * 
 * @return {object} 服务配置 
 * 
 */

 const {
    join
 } = require('path') ;

 return recorder('service' , processFn , join(process.cwd() , `doc/${name}`)) ;