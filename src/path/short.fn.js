
/**
 * 
 * 转换成短路径
 * 
 * @import removeExt from path.ext.remove
 * 
 * @import getPath from path.unix
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

if(path.indexOf(rootPath) === 0){

    return removeExt(getPath(relative(rootPath , path))) ;
}