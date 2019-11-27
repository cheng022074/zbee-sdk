
/**
 * 
 * 创建写入流
 * 
 * @import create from directory.create
 * 
 * @param {string} path 路径
 * 
 * @param {object} [options] 流配置
 * 
 * @return {fs.WriteStream} 写入流 
 * 
 */

 const {
    dirname
 } = require('path'),
 {
    createWriteStream
 } = require('fs');

 create(dirname(path)) ;

 return createWriteStream(path , options) ;


