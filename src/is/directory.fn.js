
/**
 * 
 * 判断路径是否为文件夹路径
 * 
 * @param {string} path 路径
 * 
 * @return {boolean} 路径是文件夹则返回 true , 否则返回 false
 * 
 */

const {
    existsSync,
    statSync
} = require('fs') ;

return existsSync(path) && statSync(path).isDirectory() ;
