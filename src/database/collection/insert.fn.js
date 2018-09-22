
/**
 * 
 * 获得数据库所有的集合名称
 * 
 * @import operation from database.operation
 * 
 * @import database.mongodb.collection.insert
 * 
 * @param {string} [connection] 数据库名称
 * 
 * @async
 * 
 */

return await operation('collection.insert' , connection) || [];