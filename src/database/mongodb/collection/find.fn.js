
/**
 * 
 * 查询 MongoDB的数据
 * 
 * @async
 * 
 * @param {object} config 查询配置
 * 
 * @param {string} config.collection 查询数据集合
 * 
 * @param {string} config.db 数据库连接名称
 * 
 * @param {object} config.query 数据库查询语句
 * 
 * @return {object|array} 返回查询出来的数据
 * 
 */

return await db.db.collection(collection).find(query).toArray() ;