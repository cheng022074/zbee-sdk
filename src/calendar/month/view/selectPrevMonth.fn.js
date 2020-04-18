
/**
 * 
 * 向上移动月份
 * 
 * @import prev from month.prev
 * 
 * @import getProperty from date.get.properties
 * 
 * @import selectMonth from .selectMonth scoped
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
} = getProperty(prev({
    year,
    month
}) , [
    'year',
    'month'
]) ;

selectMonth(selectedYear , selectedMonth) ;