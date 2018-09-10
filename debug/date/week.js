/**
 * 
 * @import getDates from date.week
 * 
 * @import format from date.format
 * 
 */

let dates = getDates(new Date('2018-09-16')) ;

for(let date of dates){

    console.log(format(date , 'yyyy-mm-dd')) ;
}