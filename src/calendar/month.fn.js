
/**
 * 
 * 显示以月份显示的日历数据
 * 
 * @import get from date.get
 * 
 * @import getDays from week.days
 * 
 * @import prev from date.prev
 * 
 * @import next from date.next
 * 
 * @param {number} year 年份
 * 
 * @param {number} month 月份
 * 
 * @param {object} [config = {}] 日历构造配置
 * 
 * @param {number} [config.row = 6] 日历显示行数
 * 
 * @param {number} [config.weekStartDay = 1] 每周从周几进行显示
 * 
 * @return {array} 一组日历数据 
 * 
 */

let days = getDays(weekStartDay),
    date = get({
        year,
        month,
        date:1
    }),
    prevCount = days.indexOf(date.getDay()),
    nextCount = 6 - prevCount,
    result = [
        date
    ];

let currentDate = date ;

while(prevCount -- > 0){

    result.unshift(date = prev(date)) ;
}

date = currentDate ;

while(nextCount -- > 0){

    result.push(date = next(date)) ;
}

let count = (row - 1) * 7;

while(count -- > 0){

    result.push(date = next(date)) ;
}

return result ;



