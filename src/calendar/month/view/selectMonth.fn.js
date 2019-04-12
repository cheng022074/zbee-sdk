
/**
 * 
 * 选定月份
 * 
 * @import getDates from ......month
 * 
 * @import deselectAll from ..deselectAll scoped
 * 
 * @import getProperty from date.get.property
 * 
 * @param {number} year 年份
 * 
 * @param {number} month 月份
 * 
 */

 deselectAll() ;

 let me = this,
     fields = [
        'year',
        'month',
        'day'
     ],
     dates = me.dates = getDates(year , month).map(date =>{

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