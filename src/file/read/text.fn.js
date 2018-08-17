/**
 * 
 * 读取文本文件
 * 
 * @import is.file
 * 
 * @param {string} path 文本文件路径
 * 
 * @return {string} 文本文件内容
 * 
 */

const {
    readFileSync
} = require('fs') ;

if(isFile(path)){

    return readFileSync(path , 'utf8') ;
}