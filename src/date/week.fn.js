/**
 * 
 * 计算出指定时间所在的一周所有日期
 * 
 * @import is.number
 * 
 * @import clone from date.clone
 * 
 * @param {Date|Number} [date = Date.now()] 日期时间对象
 * 
 * @return {array} 一周之内所有日期
 *
 */

if(isNumber(date)){

    date = new Date(date) ;
}

let cloneDate = clone(date),
    year = cloneDate.getFullYear(),
    month = cloneDate.getMonth(),
    day = cloneDate.getDay(),
    dateValue = cloneDate.getDate(),
    count = 7,
    dates = [];

cloneDate.setHours(0) ;

cloneDate.setMinutes(0) ;

cloneDate.setSeconds(0) ;

for(i = 1 ; i <= count ; i ++){

    cloneDate.setFullYear(year) ;

    cloneDate.setMonth(month) ;

    cloneDate.setDate(dateValue + i - day) ;

    dates.push(clone(cloneDate)) ;
}

let endDate = dates[dates.length - 1] ;

endDate.setHours(23) ;

endDate.setMinutes(59) ;

endDate.setHours(59) ;

return dates ;
