
/**
 * 
 * 转换成短路径
 * 
 * @import removeExt from path.ext.remove
 * 
 * @import getSrcPath from webpack.path.src
 * 
 * @param {string} rootPath 根路径
 * 
 * @param {string} path 路径
 * 
 * @return {string} 短路径
 * 
 */

const {
    relative
} = require('path') ;

return removeExt(relative(rootPath , path)) ;