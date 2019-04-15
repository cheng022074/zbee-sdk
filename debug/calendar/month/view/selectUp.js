
/**
 * 
 * 调试向上调整日期
 * 
 * @import getView from calendar.month.view
 * 
 */

let view = getView({
    select(year , month , day){

       //console.log('选定日期' , year , month , day) ;
    },

    load(year , month , dates){

      // console.log('当前月份所包含的日期' , year , month , dates) ;
    },

    deselect(){

        
    }
}) ;

for(let i = 0 ; i < 4 ; i ++){

    view.selectUp() ;

    console.log(`第${i + 1}次上移` , view.selectedDate) ;
}