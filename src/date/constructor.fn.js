
/**
 * 
 * 初始化日期时间对象
 * 
 * @import is.string
 * 
 * @import discernDateFormatString from date.format.discern
 * 
 * @param {mixed} data 日期时间数据
 * 
 * @require dayjs
 * 
 */

 const dayjs = require('dayjs') ;

 let me = this,
    dateFormatString = discernDateFormatString(data) ;

me.dateFormatString = dateFormatString ;

if(isString(data)){

    me.date = dayjs(data , dateFormatString) ;

}else{

    me.date = dayjs(data) ;
}