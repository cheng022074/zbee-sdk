
/**
 * 
 * 获得日期对象
 * 
 * @import is.defined
 * 
 * @param {object} [config = {}] 日期配置
 * 
 * @param {number} [config.year] 年份
 * 
 * @param {number} [config.month] 月份
 * 
 * @param {number} [config.date] 日
 * 
 * @param {number} [config.hours] 小时
 * 
 * @param {number} [config.minutes] 分钟
 * 
 * @param {number} [config.seconds] 秒
 * 
 * @return {Date} 日期对象 
 * 
 */

 let data = new Date() ;

 if(isDefined(year)){

   data.setFullYear(year) ;
 }

 if(isDefined(month)){

   data.setMonth(month - 1) ;
 }

 if(isDefined(date)){

   data.setDate(date) ;
 }

 if(isDefined(hours)){

   data.setHours(hours) ;
 }

 if(isDefined(minutes)){

   data.setMinutes(minutes) ;
 }

 if(isDefined(seconds)){

   data.setSeconds(seconds) ;
 }

 return data ;

