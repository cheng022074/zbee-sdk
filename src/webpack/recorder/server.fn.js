
/**
 * 
 * 记录器在测试服务器端实现
 * 
 * @import read from file.read.json
 * 
 * @import writeJSON from file.write.json
 * 
 * @import merge from object.assign.if
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

 path = `${path}.json` ;

 let doc = {};

 read(path , data => {

    if(data){

        doc = data ;
    }

 }) ;

 return {
    [`/recorder/${name}`]:{
        method:'post',
        fn(data){

            let result = processFn(data) ;
    
            if(isObject(result)){
    
                merge(doc , {
                    [name]:result
                }) ;
    
                writeJSON(path , doc) ;
            }
        }
    }
 } ;


