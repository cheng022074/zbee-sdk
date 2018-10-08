
/**
 * 
 * 数据库通用行为实现
 * 
 * @import getMap from database.properties.databases
 * 
 * @import getConnectionType from database.connection.type
 * 
 * @param {string} operation 行为名称
 * 
 * @param {string} [connection='default'] 数据库名称
 * 
 * @async
 * 
 * @return {mixed} 行为返回结果 
 * 
 */

let map = getMap() ;

if(map.has(connection)){

    return await include(`database.${getConnectionType(connection)}.${operation}`)(map.get(connection)) ;
}