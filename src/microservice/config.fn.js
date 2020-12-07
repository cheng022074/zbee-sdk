
/**
 * 
 * 处理传入的服务器配置
 * 
 * @import is.defined
 * 
 * @import processDatasourceMap from .config.datasources
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
            datasources
        } = config ;

        innerConfig = {
            port,
            datasources:processDatasourceMap(datasources)
        } ;
    }

    return innerConfig ;
 }