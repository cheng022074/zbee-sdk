
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

 const {
    join
 } = require('path') ;

 let innerConfig ;

 function main(config){

    if(isDefined(config)){

        let {
            port = 8080,
            datasources = {},
            server = {},
            sourceCodeDirectory = 'src'
        } = config ;

        sourceCodeDirectory = join(process.cwd() , sourceCodeDirectory) ;

        innerConfig = {
            sourceCodeDirectory,
            port,
            datasources:processDatasourceMap(datasources),
            server:processServerMap(server , sourceCodeDirectory)
        } ;
    }

    return innerConfig ;
 }