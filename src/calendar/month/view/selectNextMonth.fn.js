
/**
 * 
 * 向下移动月份
 * 
 * @import next from month.next
 * 
 * @import getProperty from date.get.property
 * 
 * @import selectMonth from ..selectMonth scoped
 * 
 */

 let me = this,
 {
     year,
     month
 } = me,
 {
    year:selectedYear,
    month:selectedMonth
 } = getProperty(next({
     year,
     month
 }) , [
     'year',
     'month'
 ]) ;

 selectMonth(selectedYear , selectedMonth) ;