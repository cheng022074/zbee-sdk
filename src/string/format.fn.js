
/**
 * 
 * 字符串格式化
 * 
 * @param {string} format 格式字符串
 * 
 * @param {mixed} [...args] 格式参数
 * 
 * @return {string} 格式化后的字符串 
 * 
 */

 let formatRe = /\{(\d+)\}/g ;

 function main(format , ...args){

    return format.replace(formatRe , (match , index) => args[index]) ;
 }