
/**
 * 
 * 使用表名与数据目录路径构建存储模型
 * 
 * @import read from file.read.json
 * 
 * @import getSyncFilePath from database.memory.collection.syncFilePath
 * 
 * @param {string} name 数据存储表名
 * 
 * @param {string} path 数据存储路径
 * 
 * 
 */

let me = this ;

me.name = name ;

me.path = path ;

me.data = read(getSyncFilePath(name , path)) || [];
