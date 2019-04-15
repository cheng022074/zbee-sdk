
/**
 * 
 * 向上移一格日期
 * 
 * @import getFirstWeekDates from month.dates.week.first
 * 
 * @import includes from array.dates.includes
 * 
 * @import get from date.get
 * 
 * @import prevMonth from ..selectPrevMonth scoped
 * 
 * @import prevDate from date.prev.week
 * 
 * @import getProperty from date.get.properties
 * 
 * @import select from ..select scoped
 * 
 */

let {
    selectedDate,
    weekStartDay,
    year,
    month
 } = this ;

 if(selectedDate){

    let dates = getFirstWeekDates(year , month , weekStartDay),
        date = get(selectedDate) ;

    if(includes(dates , date)){

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