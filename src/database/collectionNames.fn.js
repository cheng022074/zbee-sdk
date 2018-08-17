
/**
 * 
 * 获得数据库所有的集合名称
 * 
 * @import getMap from database.properties.databases
 * 
 * @import getConnectionType from database.connection.type
 * 
 * @import database.mongodb.collectionNames
 * 
 * @param {string} [connection='default'] 数据库名称
 * 
 * @async
 * 
 * @return {array} 一组集合名称 
 * 
 */

let map = getMap() ;

if(map.has(connection)){

    return await include(`database.${getConnectionType(connection)}.collectionNames`)(map.get(connection)) ;
}

return [] ;