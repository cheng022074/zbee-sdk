
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

 me.proxy = getProxy(target) ;

 me.selectedDates = [] ;

 me.dates = [] ;

 if(!selectedDate){

    let date = new Date() ;

    selectedDate = {
        year:date.getFullYear(),
        month:date.getMonth() + 1,
        day:date.getDate()
    }
 }

 let {
     year,
     month,
     day
 } = selectedDate ;

 selectMonth(year , month) ;

 select(year , month , day) ;