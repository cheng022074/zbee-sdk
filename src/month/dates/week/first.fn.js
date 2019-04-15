
/**
 * 
 * 获得指定月份的第一周的所有日期
 * 
 * @import getDays from week.days
 * 
 * @import getFirstDate from month.date.first
 * 
 * @import next from date.next
 * 
 * @param {number} year 年份 
 * 
 * @param {number} month 月份
 * 
 * @param {number} [weekStartDay = 1] 确定一周从周几进行计算
 * 
 * @return {Date[]} 一周里所有的日期 
 * 
 */

let days = getDays(weekStartDay),
    date = getFirstDate(year , month),
    firstIndex = days.indexOf(date.getDay()),
    result = [
        date
    ];

for(let i = firstIndex + 1; i < 7 ; i ++){

    result.push(date = next(date)) ;
}

return result ;



 