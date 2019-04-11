/**
 * 
 * 显示以月份显示的日历数据
 * 
 * @import getDates from ....month
 * 
 * @param {number} year 年份
 * 
 * @param {number} month 月份
 * 
 * @param {object} [config = {}] 日历构造配置
 * 
 * @return {array} 一组日历数据 
 * 
 */

 function main(year , month , config){

    let {
        selectedDate
    } = config ;

    return getDates(year , month , config).map(date =>{

        let itemYear = date.getFullYear(),
            itemMonth = date.getMonth() + 1,
            activate = year === itemYear && month === itemMonth;

        date = date.getDate() ;

        return {
            activate,
            year:itemYear,
            month:itemMonth,
            date,
            selected:activate && selectedDate === date
        } ;

    }) ;
 }