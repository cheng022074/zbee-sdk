/**
 * 
 * 替换路径的根目录路径
 * 
 * @param {string} path 路径
 * 
 * @param {string} rootPath 根目录路径
 * 
 * @param {string} [replaceRootPath = ''] 替换后的根目录路径
 * 
 * @return {string} 替换后的路径
 * 
 */

const {
    join
} = require('path') ;

if(path.indexOf(rootPath) === 0){

    return join(replaceRootPath , path.replace(rootPath , '')) ;
}