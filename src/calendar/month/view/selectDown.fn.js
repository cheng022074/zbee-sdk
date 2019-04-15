
/**
 * 
 * 向下移一格日期
 * 
 * @import getLastWeekDates from month.dates.week.last
 * 
 * @import includes from array.dates.includes
 * 
 * @import get from date.get
 * 
 * @import nextMonth from ..selectNextMonth scoped
 * 
 * @import nextDate from date.next.week
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

    let dates = getLastWeekDates(year , month , weekStartDay),
        date = get(selectedDate) ;

    if(includes(dates , date)){

        nextMonth() ;
    
    }else{

        date = nextDate(date) ;

        let {
            year,
            month,
            day
        } = getProperty(date , [
            'year',
            'month',
            'day'
        ]) ;

        select(year , month , day) ;
    }
 }

