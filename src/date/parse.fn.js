/**
 * 
 * 将字符串转换成日期
 * 
 * @import doFormat from string.format
 * 
 * @param {string} data 字符串
 * 
 * @param {string} [format = 'YYYY-MM-DD'] 日期格式
 * 
 * @return {Date} 日期对象 
 * 
 * @require date-and-time
 * 
 */

const {
   parse
} = require('date-and-time') ;

function main(data , format){

   return parse(data , format) ;
}

 