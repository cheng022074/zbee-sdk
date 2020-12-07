
/**
 * 
 * 处理传入的服务器配置
 * 
 * @import is.defined
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
            port = 8080
        } = config ;

        innerConfig = {
            port
        } ;
    }

    return innerConfig ;
 }