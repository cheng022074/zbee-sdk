
/**
 * 
 * 清除当前日历所有选定
 * 
 */

 let {
    proxy,
    dates,
    selectedDates
 } = this ;

 for(let selectedDate of selectedDates){

    selectedDate.selected = false ;

    proxy.call('deselect' , dates.indexOf(selectedDate) , selectedDate) ;
    
 }

 selectedDates.length = 0 ;
 