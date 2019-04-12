/**
 * 
 * 基于当前日历向前移一次
 * 
 * @import get from date.get
 * 
 * @import is.date
 * 
 * @param {Date} date 基准日期
 * 
 * @return {Date} 移过的日期 
 * 
 */

if(isDate(date)){

   date = {
      year:date.getFullYear(),
      month:date.getMonth() + 1,
      day:date.getDate()
   } ;
 }

 date.day -- ;

 return get(date) ;