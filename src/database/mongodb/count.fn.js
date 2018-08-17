
/**
 * 
 * 统计指定查询的记录数
 * 
 * @import mongodb from database.mongo
 * 
 * @param {object} config 查询配置
 * 
 * @param {string} config.collection 查询数据集合
 * 
 * @param {string} [config.database='default'] 数据库名称
 * 
 * @param {object} [config.query={}] 查询
 * 
 * @return {number} 查询出来记录数
 * 
 * @scoped
 * 
 * @async
 * 
 */

let {
    databases
} = mongodb,
target = databases.get(database).db.collection(collection);

return await target.count(query) ;

