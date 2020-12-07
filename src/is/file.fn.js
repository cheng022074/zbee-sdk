
/**
 * 
 * 判断路径是否为文件路径
 * 
 * @param {string} path 路径
 * 
 * @return {boolean} 路径是文件则返回 true , 否则返回 false
 * 
 */

const {
    stat
} = require('fs') ;

return new Promise(resolve => stat(path , (error , stats) => error ? reject(false) : resolve(stats.isFile())))  ;
