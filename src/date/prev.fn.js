/**
 * 
 * 基于当前日历向前移一次
 * 
 * @import get from date.get
 * 
 * @import getProperty from date.get.property
 * 
 * @import is.date
 * 
 * @param {Date} date 基准日期
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

 date.day -- ;

 return get(date) ;