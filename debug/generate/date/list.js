
/**
 * 
 * 调试日期列表生成器
 * 
 * @import getList from generate.date.list
 * 
 * @import get from date.get
 * 
 * @import format from date.format
 * 
 */

 let dates = getList(get({
     year:1970,
     month:1,
     day:2,
     hours:9,
     minutes:30,
     seconds:0
 }) , get({
    year:1970,
    month:1,
    day:2,
    hours:11,
    minutes:30,
    seconds:0
}) , 30 , false) ;

for(let date of dates){

    console.log(format(date , 'HH:MM:ss')) ;
}