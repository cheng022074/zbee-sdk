
/**
 * 
 * 基于日历数组进行包含性检测
 * 
 * @import get from date.get.properties
 * 
 * @param {Date[]} dates 日历数组
 * 
 * @param {Date} date 校验匹配数据项
 * 
 * @param {array} [fields = ['year' , 'month' , 'day']] 校验字段项
 * 
 * @return {boolean} 如果日历数组中包含校验项则返回 true , 否则返回 false 
 * 
 */

 let {
    year,
    month,
    day
 } = get(date , fields) ;

 for(let date of dates){

    let {
        year:itemYear,
        month:itemMonth,
        day:itemDay
    } = get(date) ;

    if(itemYear === year && itemMonth === month && itemDay === day){

        return true ;
    }
 }

 return false ;
 



 