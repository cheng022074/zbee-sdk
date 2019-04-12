
/**
 * 
 * 构建一个月基日历
 * 
 * @import getProxy from object.proxy
 * 
 * @import selectMonth from ..selectMonth scoped
 * 
 * @import select from ..select scoped
 * 
 * @import getProperty from date.get.property
 * 
 * @param {mixed} target 可提供日历显示的套件
 * 
 * @param {object} [config = {}] 初始化配置
 * 
 * @param {boolean} [config.multiSelectMode = false] 是否启动多选模式 
 * 
 * @param {object} [config.selectedDate] 初始化选择日期
 * 
 */

 let me = this ;

 me.multiSelectMode = multiSelectMode ;

 me.proxy = getProxy(target) ;

 me.selectedDates = [] ;

 me.dates = [] ;

 if(!selectedDate){

    selectedDate = getProperty(new Date() , [
        'year',
        'month',
        'day'
    ]) ;
 }

 let {
     year,
     month,
     day
 } = selectedDate ;

 selectMonth(year , month) ;

 select(year , month , day) ;