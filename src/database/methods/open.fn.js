
/**
 * 
 * 打开一个数据库连接
 * 
 * @import getMap from database.properties.databases
 * 
 * @import getConnectionType from database.connection.type
 * 
 * @import getConnectionConfig from database.connection.config
 * 
 * @import database.mongodb.open
 * 
 * @param {string} [name = 'default'] 连接标识名称
 * 
 * @async
 * 
 */

let databaseConfig = config('database' , name) ;

if(databaseConfig){

    let open,
        config = getConnectionConfig(name);

    try{

        open = include(`database.${getConnectionType(name)}.open`) ;

    }catch(err){

        throw new Error(`系统无法连接此类型数据库:${JSON.stringify(config)}`) ;
    }

    await open(getMap() , name , config) ;

}else{

    throw new Error(`${name} 无效的数据库配置`) ;
}