
/**
 * 
 * 读取 JSON 文件
 * 
 * @import read from file.read.text
 * 
 * @import parse from json.parse
 * 
 * @param {string} path JSON文件存储路径
 * 
 *  @param {function} [watchFn] 是否以监听方式获取文件内容
 * 
 * @return {mixed} JSON数据 
 * 
 */

 function main(path , watchFn){

    if(watchFn){

        read(path , data => watchFn(getJSON(data))) ;
     
    }else{
    
        return getJSON(read(path)) ;
    
    }
 }

 function getJSON(data){

    if(data){

        return parse(data) ;
    }
 }

 


