/**
 * 
 * 读取文本文件
 * 
 * @import read from file.read
 * 
 * @param {string} path 文本文件路径
 * 
 * @return {string} 文本文件内容
 * 
 */

let data = read(path) ;

if(data){

    return data.toString('utf8') ;
}