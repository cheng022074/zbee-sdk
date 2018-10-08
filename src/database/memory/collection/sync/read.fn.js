
/**
 * 
 * 读取同步数据文件中的数据内容
 * 
 * @import getSyncFilePath from database.memory.collection.sync.path
 * 
 * @param {string} name 数据存储表名
 * 
 * @param {string} path 数据存储路径
 * 
 * @param {string} readName 读取器名称
 * 
 */

include(`database.memory.collection.sync.read.${readName}`)(getSyncFilePath(name , path)) || [];
