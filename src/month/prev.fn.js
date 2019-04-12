import { get } from "https";

/**
 * 
 * 获得指定月份的上一个月份
 * 
 * @import get from date.get
 * 
 * @import is.date
 * 
 * @param {Date | object} date 包括月份的日期对象 
 * 
 * @return {Date} 上一个月份 
 * 
 */

 if(isDate(date)){

    date = {
        year:date.getFullYear(),
        month:date.getMonth() + 1,
        day:date.getDate()
     } ;
 }

 date.month -- ;

 return get(date) ;