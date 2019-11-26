
/**
 * 
 * 创建读取流
 * 
 * @import create from directory.create
 * 
 * @param {string} path 路径
 * 
 * @param {object} [options] 流配置
 * 
 * @return {fs.WriteStream} 读取流 
 * 
 */

const {
    createReadStream
 } = require('fs');

 return createReadStream(path , options) ;


