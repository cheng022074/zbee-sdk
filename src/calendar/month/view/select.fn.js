
/**
 * 
 * 选定
 * 
 * @import deselectAll from ..deselectAll scoped
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
    multiSelectMode,
    selectedDates,
    dates
 } = me;

 if(multiSelectMode === false && selectedDate){

   deselectAll() ;
 }

 for(let date of dates){

   let {
      year:itemYear,
      month:itemMonth,
      day:itemDay
   } = date ;

   if(itemYear === year && itemMonth === month && itemDay === day){

      me.selectedDates.push(date) ;

      proxy.call('select' , year , month , day) ;

      break ;
   }
 }



