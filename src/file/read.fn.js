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
    readFile
} = require('fs') ;

if(await isFile(path)){

    return new Promise((resolve , reject) => readFile(path , (error , data) => error ? reject(error) : resolve(data))) ;
}