/**
 * 
 * 基于当前日历向后移一次
 * 
 * @import get from date.get
 * 
 * @import getProperty from date.get.properties
 * 
 * @import is.date
 * 
 * @param {Date | object} date 基准日期
 * 
 * @param {number} [step = 1] 步长
 * 
 * @return {Date} 移过的日期 
 * 
 */

 if(isDate(date)){

   date = getProperty(date , [
     'year',
     'month',
     'day'
   ]) ;
 }

 let {
   day,
   ...other
 } = date ;

 day += step ;

 return get({
   day,
   ...other
 }) ;