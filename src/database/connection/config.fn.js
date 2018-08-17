
/**
 * 
 * 获得数据库连接中的数据库类型
 * 
 * @param {string} [name = 'default'] 数据库连接名称
 * 
 * @return {object} 数据库连接配置
 * 
 */

let databaseConfig = config('database' , name) ;

if(databaseConfig){

    let {
        type,
        backup,
        ...proxyConfig
    } = databaseConfig ;

    return proxyConfig ;
}

throw new Error(`${name} 无效的数据库配置`) ;