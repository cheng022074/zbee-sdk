/**
 * 
 * 向左移一个格
 * 
 * @import isFirst from is.week.day.first
 * 
 * @import get from date.get
 * 
 * @import prevMonth from .selectPrevMonth scoped
 * 
 * @import prevDate from date.prev
 * 
 * @import getProperty from date.get.properties
 * 
 * @import select from .select scoped
 * 
 */

 let {
    selectedDate,
    weekStartDay,
    month
 } = this ;

 if(selectedDate){

    let date = get(selectedDate) ;

    if(isFirst(date , weekStartDay)){

        prevMonth() ;
    
    }else{

        date = prevDate(date) ;

        let {
            year:prevYearValue,
            month:prevMonthValue,
            day
        } = getProperty(date , [
            'year',
            'month',
            'day'
        ]) ;

        if(prevMonthValue !== month){

            prevMonth() ;
        }

        select(prevYearValue , prevMonthValue , day) ;
    }
 }