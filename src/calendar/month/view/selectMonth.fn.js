
/**
 * 
 * 选定月份
 * 
 * @import getDates from ....month
 * 
 * @import deselect from .deselect scoped
 * 
 * @import select from .select scoped
 * 
 * @import getProperty from date.get.properties
 * 
 * @param {number} year 年份
 * 
 * @param {number} month 月份
 * 
 */

 let me = this,
 {
    selectedDate,
    weekStartDay,
    viewConfig
 } = me;

 deselect() ;

 let fields = [
        'year',
        'month',
        'day'
     ],
     dates = me.dates = getDates(year , month , {
        ...viewConfig,
        weekStartDay
     }).map(date =>{

        let {
            year:itemYear,
            month:itemMonth,
            day
        } = getProperty(date , fields),
        activate = year === itemYear && month === itemMonth;
        
        return {
            activate,
            year:itemYear,
            month:itemMonth,
            day,
            selected:false,
            key:date.getTime()
        } ;

    }) ;

me.year = year ;

me.month = month ;

me.proxy.call('load' , year , month , dates) ;

if(selectedDate){

    let {
        day
    } = selectedDate,
    {
        year,
        month
    } = me;

    select(year , month , day) ;
}