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
 * @scoped
 *  
 */

if(isNumber(date)){

    date = new Date(date) ;
}

let cloneDate = clone(date),
    count = 6,
    dates = [],
    i = 0;

for(i = 0 ; i < count ; i ++){

    cloneDate.setDay(i) ;

    dates.push(clone(cloneDate)) ;
}

cloneDate.setDay(i) ;

dates.push(clone(cloneDate)) ;

return dates ;
