
/**
 * 
 * 获得指定月份的最后一周的所有日期
 * 
 * @import getDays from week.days
 * 
 * @import getLastDate from month.date.last
 * 
 * @import prev from date.prev
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
    date = getLastDate(year , month),
    lastIndex = days.indexOf(date.getDay()),
    result = [
        date
    ];

for(let i = lastIndex - 1; i >= 0 ; i --){

    result.push(date = prev(date)) ;
}

return result ;