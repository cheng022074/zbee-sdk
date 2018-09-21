
/**
 * 
 * 读取 JSON 文件
 * 
 * @import read from file.read.text
 * 
 * @param {string} path JSON文件存储路径
 * 
 * @return {mixed} JSON数据 
 * 
 */

let data = read(path) ;

if(data){

    return JSON.parse(data) ;
}
