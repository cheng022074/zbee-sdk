
/**
 * 
 * 获得指定集合的数据
 * 
 * @import getMap from database.properties.databases
 * 
 * @import getConnectionType from database.connection.type
 * 
 * @import database.mongodb.collection.find
 * 
 * @param {object} config 配置
 * 
 * @param {string} config.collection 数据库名称
 * 
 * @param {string} [config.connection='default'] 数据库名称
 * 
 * @param {string} [config.query] 查询
 * 
 * @async
 * 
 * @return {array} 一组集合名称 
 * 
 */

let map = getMap() ;

if(map.has(connection)){

    return await include(`database.${getConnectionType(connection)}.collection.find`)({
        db:map.get(connection),
        collection,
        query
    }) ;
}

return [] ;