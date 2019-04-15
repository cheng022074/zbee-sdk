
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
 * @import getLastDate from month.date.last
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
 * @param {number} [config.day] 指定日期所在周作为日历的第一周
 * 
 * @param {boolean} [config.ignoreNotCurrentMonthLastRow = true] 是否忽略不是本月的尾行
 * 
 * @return {array} 一组日历数据 
 * 
 */


if(!day){

    day = 1 ;

}

let lastDay = getLastDate(year , month).getDate() ;

if(day > lastDay){

    day = lastDay ;
}

let date = get({
    year,
    month,
    day
}) ;

let days = getDays(weekStartDay),
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

let count = (row - 1) ;

while(count -- > 0){

    date = next(date) ;

    if(ignoreNotCurrentMonthLastRow && date.getMonth() + 1 !== month){

        break ;
    }

    result.push(date) ;

    for(let i = 0 ; i < 6 ; i ++){

        result.push(date = next(date)) ;
    }

    
}

return result ;



