
/**
 * 
 * 数据源
 * 
 * @import config from .config value
 * 
 * @param {string} name 数据源名称
 * 
 * @return {mixed} 数据源对象
 * 
 */

 const {
    datasources
 } = config ;

 function main(name){

    return datasources[name] ;
 }



