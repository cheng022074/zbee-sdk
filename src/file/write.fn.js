
/**
 * 
 * 保存文件
 * 
 * @import create from directory.create
 * 
 * @param {string} path 保存文件路径
 * 
 * @param {mixed} data 保存文件内容
 * 
 * 
 */

const {
    writeFile
} = require('fs'),
{
    dirname
} = require('path');

await create(dirname(path)) ;

return new Promise((resolve , reject) => writeFile(path , data , error => error ? reject(error) : resolve())) ;