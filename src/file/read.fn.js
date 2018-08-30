/**
 * 
 * 读取文件
 * 
 * @import is.file
 * 
 * @param {string} path 文本文件路径
 * 
 * @return {ArrayBuffer} 原生文件内容
 * 
 */

const {
    readFileSync
} = require('fs') ;

if(isFile(path)){

    return readFileSync(path) ;
}