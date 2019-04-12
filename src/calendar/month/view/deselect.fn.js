
/**
 * 
 * 清除当前日历所有选定
 * 
 */

 let me = this,
 {
    proxy,
    dates,
    selectedDate
 } = me ;

 if(selectedDate){

    selectedDate.selected = false ;

    proxy.call('deselect' , dates.indexOf(selectedDate) , selectedDate) ;
    
 }

 delete me.selectedDate ;
 