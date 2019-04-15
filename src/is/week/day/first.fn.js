
/**
 * 
 * 判断指定日期是否为一周的第一天
 * 
 * @param {Date} date 校验日期
 * 
 * @param {number} [weekStartDay = 1] 确认一周是从周几算起
 *  
 * @return {boolean} 如果是第一天的话，则返回 true , 否则返回 false
 * 
 */

 return date.getDay() === weekStartDay ;

 