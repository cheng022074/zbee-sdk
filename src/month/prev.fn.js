import { get } from "https";

/**
 * 
 * 获得指定月份的上一个月份
 * 
 * @import get from date.get
 * 
 * @import getProperty from date.get.property
 * 
 * @import is.date
 * 
 * @param {Date | object} date 包括月份的日期对象 
 * 
 * @return {Date} 上一个月份 
 * 
 */

 if(isDate(date)){

    date = getProperty(date , [
        'year',
        'month',
        'day'
    ]) ;
 }

 date.month -- ;

 return get(date) ;