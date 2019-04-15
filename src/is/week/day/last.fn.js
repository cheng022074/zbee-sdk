
/**
 * 
 * 判断指定日期是否为一周的最后一天
 * 
 * @import getDays from week.days
 * 
 * @param {Date} date 校验日期
 * 
 * @param {number} [weekStartDay = 1] 确认一周是从周几算起
 *  
 * @return {boolean} 如果是最后一天的话，则返回 true , 否则返回 false
 * 
 */

let days = getDays(weekStartDay) ;

return date.getDay() === days[days.length - 1] ;