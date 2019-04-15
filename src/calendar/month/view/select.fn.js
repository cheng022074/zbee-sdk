
/**
 * 
 * 选定
 * 
 * @import deselect from ..deselect scoped
 * 
 * @param {number} year 选定年份
 * 
 * @param {number} month 选定月份
 * 
 * @param {number} day 选定日期
 * 
 */

 let me = this,
 {
    proxy,
    selectedDate,
    dates
 } = me;

 deselect() ;

 let count = -1 ;

 for(let date of dates){

   let {
      year:itemYear,
      month:itemMonth,
      day:itemDay
   } = date ;

   count ++ ;

   if(itemYear === year && itemMonth === month && itemDay === day){

      me.selectedDate = date ;

      date.selected = true ;

      proxy.call('select' , count , date) ;

      break ;
   }
 }

 proxy.call('select' , count , dates[count]) ;



