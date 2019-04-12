/**
 * 
 * 基于当前日历向后移一次
 * 
 * @import get from date.get
 * 
 * @import is.date
 * 
 * @param {Date | object} date 基准日期
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

 date.day ++ ;

 return get(date) ;