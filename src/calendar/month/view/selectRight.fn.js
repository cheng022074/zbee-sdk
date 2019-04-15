
/**
 * 
 * 向右移一个格日期
 * 
 * @import isLast from is.week.day.last
 * 
 * @import get from date.get
 * 
 * @import nextMonth from ..selectNextMonth scoped
 * 
 * @import nextDate from date.next
 * 
 * @import getProperty from date.get.properties
 * 
 * @import select from ..select scoped
 * 
 */


let {
    selectedDate,
    weekStartDay,
    month
 } = this ;

 if(selectedDate){

    let date = get(selectedDate) ;

    if(isLast(date , weekStartDay)){

        nextMonth() ;
    
    }else{

        date = nextDate(date) ;

        let {
            year:nextYearValue,
            month:nextMonthValue,
            day
        } = getProperty(date , [
            'year',
            'month',
            'day'
        ]) ;

        if(nextMonthValue !== month){

            nextMonth() ;
        }

        select(nextYearValue , nextMonthValue , day) ;
    }
 }