
/**
 * 
 * 获得数据库连接中的数据库类型
 * 
 * @param {string} [name = 'default'] 数据库连接名称
 * 
 * @return {string} 数据库类型名称
 * 
 */

let databaseConfig = config('database' , name) ;

if(databaseConfig){

    let {
        type
    } = databaseConfig ;

    return type || 'mongodb' ;
}

throw new Error(`${name} 无效的数据库配置`) ;
