
/**
 * 
 * 使用表名与数据目录路径构建存储模型
 * 
 * @import read from database.memory.collection.sync.read
 * 
 * @param {string} name 数据存储表名
 * 
 * @param {string} path 数据存储路径
 * 
 * @param {string} type 数据存储类型
 * 
 * 
 */

let me = this ;

me.name = name ;

me.path = path ;

me.data = read(name , path , type) || [];
