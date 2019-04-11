
/**
 * 
 * 指定月份的最后日期
 * 
 * @import get from date.get
 * 
 * @import prev from date.prev
 * 
 * @param {number} year 年份
 * 
 * @param {number} month 月份
 * 
 * @return {Date} 日期对象 
 * 
 */

 let lastDate = 31,
   date = get({
    year,
    month,
    date:lastDate
   }) ;


 while(date.getMonth() !== month){

    date = prev(date) ;
 }

 return date ;
