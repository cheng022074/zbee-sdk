
/**
 * 
 * 返回源代码目录路径
 * 
 * @param {string} path  源代码路径下的相对路径
 * 
 * @return {string}  目录路径
 * 
 */

const {
    join,
    resolve
} = require('path'),
srcPath = resolve('src');

if(path){

    return join(srcPath , path) ;
}

return srcPath ;