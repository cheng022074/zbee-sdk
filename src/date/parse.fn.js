/**
 * 
 * 将字符串转换成日期
 * 
 * @import doFormat from string.format
 * 
 * @param {string} data 字符串
 * 
 * @param {Regex} regex 正则表达式
 * 
 * @param {string} format 日期格式
 * 
 * @return {Date} 日期对象 
 * 
 */

 let args = data.match(regex) ;

 if(args){

    return new Date(doFormat(format , ...args)) ;
 }

 