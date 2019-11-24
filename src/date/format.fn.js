
/**
 * 
 * 日期时间格式化
 * 
 * @param {Date} date 日期时间对象
 * 
 * @param {string} [format = 'yyyy-mm-dd'] 日期时间格式化字符串
 * 
 * @return {string} 根据格式化字符串输出的日期数据
 * 
 * @require date-and-time
 *
 * @scoped
 *  
 */

const {
    format
} = require('date-and-time') ;

function main(date , format){

    return format(date , format) ;
}

