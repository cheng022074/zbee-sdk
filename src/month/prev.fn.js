/**
 * 
 * 获得指定月份的上一个月份
 * 
 * @import get from date.get
 * 
 * @import getProperty from date.get.properties
 * 
 * @import is.date
 * 
 * @param {Date | object} date 包括月份的日期对象 
 * 
 * @return {Date} 上一个月份 
 * 
 */

 if(isDate(date)){

    date = getProperty(date , [
        'year',
        'month'
    ]) ;
 }

 let {
    month,
    ...other
 } = date ;

 month -- ;

 return get({
     month,
    ...other
 }) ;