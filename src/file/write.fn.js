
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
    writeFileSync
} = require('fs'),
{
    dirname
} = require('path');

create(dirname(path)) ;

writeFileSync(path , data) ;