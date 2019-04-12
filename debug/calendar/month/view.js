
/**
 * 
 * 调试月基日历视图
 * 
 * @import getView from calendar.month.view
 * 
 */

 let view = getView({
     select(year , month , day){

        console.log('选定日期' , year , month , day) ;
     },

     load(dates){

        console.log('当前月份所包含的日期' , dates) ;
     }
 }) ;