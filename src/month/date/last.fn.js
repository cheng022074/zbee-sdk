
/**
 * 
 * 指定月份的最后日期
 * 
 * @import get from date.get
 * 
 * @import prev from date.prev
 * 
 * @import getLastDate from ..last
 * 
 * @param {number} year 年份
 * 
 * @param {number} month 月份
 * 
 * @return {Date} 日期对象 
 * 
 */

 let date = get({
      year,
      month,
      day:31
   }) ;

 if(month < 1 || month > 12){

    return getLastDate(date.getFullYear() , date.getMonth() + 1) ;
 }

 while(date.getMonth() + 1 !== month){

    date = prev(date) ;
 }

 return date ;
