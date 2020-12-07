
/**
 * 
 * 处理传入的服务器配置
 * 
 * @import is.defined
 * 
 * @import processDatasourceMap from .config.datasources
 * 
 * @import processServerMap from .config.server
 * 
 * @param {object} config 服务器配置
 * 
 * @return {object} 处理后的服务器配置 
 * 
 */

 let innerConfig ;

 function main(config){

    if(isDefined(config)){

        let {
            port = 8080,
            datasources,
            server
        } = config ;

        innerConfig = {
            port,
            datasources:processDatasourceMap(datasources),
            server:processServerMap(server)
        } ;
    }

    return innerConfig ;
 }