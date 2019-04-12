
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

    if(dates.includes(selectedDate)){

        let {
            year,
            month,
            day
        } = selectedDate ;

        proxy.call('deselect' , year , month , day) ;
    }
 }

 selectedDates.length = 0 ;
 