
/**
 * 
 * 处理数据源配置信息
 * 
 * @import storage.memory
 * 
 * @import axios
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} datasources 数据源配置
 * 
 * @return {object} 处理后的数据源配置
 * 
 */

 let names = Object.keys(datasources),
     result = {};

for(let name of names){

    let datasource = datasources[name],
        datasourceClassName,
        datasourceConfig;

    if(isString(datasource)){

        datasourceClassName = datasource ;
    
    }else if(isObject(datasource)){

        datasourceClassName = datasource.type ;

        datasourceConfig = datasource.config ;
    }

    switch(datasourceClassName){

        case 'axios':

            result[name] = axios ;

            break ;

        default:

            if(datasourceClassName){

                result[name] = include(datasourceClassName)(datasourceConfig) ;
            }
    }

    
}

return result ;

