
/**
 * 
 * 在指定目录下包含下符合包含、排除规则的所有文件
 * 
 * @import from from array.from
 * 
 * @import is.file
 * 
 * @import is.directory
 * 
 * @import getFilePaths from ..readAllFilePaths
 * 
 * @import ext from path.ext
 * 
 * @param {string} path 指定目录路径
 * 
 * @param {object} options 配置
 * 
 * @param {mixed} options.includes 包含资源
 * 
 * @param {mixed} [options.excludes] 排除资源
 * 
 * @param {mixed} [options.suffixes] 文件后缀名
 * 
 * @return {array} 所有符合规则的文件
 * 
 */

const {
    join
} = require('path');

function main(path , {
    includes,
    excludes,
    suffixes
}){

    let includeFilePaths = getPaths(path , includes),
        excludeFilePaths = getPaths(path , excludes);

    if(suffixes){

        suffixes = from(suffixes) ;
    }
    
    return includeFilePaths.filter(path => {

        if(!excludeFilePaths.includes(path)){

            if(suffixes && !suffixes.includes(ext(path))){

                return false ;
            }

            return true ;
        }

        return false ;

    }) ;
}

function getPaths(path , resources){

    resources = from(resources) ;

    let resourcePaths = [] ;

    for(let resource of resources){

        let resourcePath = join(path , resource) ;
    
        if(isFile(resourcePath)){
    
            resourcePaths.push(resourcePath) ;
    
        }else if(isDirectory(resourcePath)){
    
            resourcePaths.push(...getFilePaths(resourcePath)) ;
        }
    }

    return resourcePaths ;
    
}




