
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
 * @import getProperty from date.get.properties
 * 
 * @param {mixed} target 可提供日历显示的套件
 * 
 * @param {object} [config = {}] 初始化配置
 * 
 * @param {object} [config.selectedDate] 初始化选择日期
 * 
 * @param {number} [config.weekStartDay = 0] 默认从星期天进行计算
 * 
 * @param {object} [config.viewConfig = {}] 日历视图设置
 * 
 */

 let me = this ;

 me.viewConfig = viewConfig ;

 me.weekStartDay = weekStartDay ;

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