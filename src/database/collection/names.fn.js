
/**
 * 
 * 获得数据库所有的集合名称
 * 
 * @import operation from database.operation
 * 
 * @import database.mongodb.collection.names
 * 
 * @param {string} [connection] 数据库名称
 * 
 * @async
 * 
 * @return {string[]} 一组集合名称 
 * 
 */

return await operation('collection.names' , connection) || [];