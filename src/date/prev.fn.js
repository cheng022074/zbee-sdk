/**
 * 
 * 基于当前日历向前移一次
 * 
 * @import get from date.get
 * 
 * @param {Date} date 基准日期
 * 
 * @return {Date} 移过的日期 
 * 
 */

 return get({
    year:date.getFullYear(),
    month:date.getMonth() + 1,
    date:date.getDate() - 1
 }) ;