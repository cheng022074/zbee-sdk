
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
 * @return {mixed} JSON数据 
 * 
 */

let data = read(path) ;

if(data){

    return parse(data) ;
}
