
/**
 * 
 * 选定月份
 * 
 * @import getDates from ......month
 * 
 * @param {number} year 年份
 * 
 * @param {number} month 月份
 * 
 */

 let me = this,
     dates = me.dates = getDates(year , month).map(date =>{

        let itemYear = date.getFullYear(),
            itemMonth = date.getMonth() + 1,
            activate = year === itemYear && month === itemMonth;

        return {
            activate,
            year:itemYear,
            month:itemMonth,
            day:date.getDate(),
            selected:false,
            key:date.getTime()
        } ;

    }) ;

me.year = year ;

me.month = month ;

me.proxy.call('load' , year , month , dates) ;