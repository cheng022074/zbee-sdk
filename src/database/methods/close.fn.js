
/**
 * 
 * 关闭指定已打开的数据库连接
 * 
 * @import getMap from database.properties.databases
 * 
 * @param {string} [name = 'default'] 数据库连接名称
 * 
 * @async
 * 
 */

let database = getMap().get(name) ;

if(database){

    database.close() ;
    
}else{

    throw new Error(`${name} 无效的数据库配置`) ;
}
