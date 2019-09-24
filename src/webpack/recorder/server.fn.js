
/**
 * 
 * 记录器在测试服务器端实现
 * 
 * @import read from file.read.json
 * 
 * @import write from file.write.json
 * 
 * @import merge from json.merge
 * 
 * @import isObject from is.object.simple
 * 
 * @param {string} name 记录名称
 * 
 * @param {function} processFn 处理函数
 * 
 * @param {string} path 数据合并的路径
 * 
 * @return {object} 服务配置
 * 
 */

 let doc = read(path) || {};

 return {
    [`/recorder/${name}`]:{
        method:'post',
        fn(data){

            let result = processFn(data) ;
    
            if(isObject(result)){
    
                doc = merge(doc , result) ;
    
                write(path , doc) ;
            }
        }
    }
 } ;


