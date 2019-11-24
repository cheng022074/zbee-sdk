
/**
 * 
 * 将指定数据转换成日期对象
 * 
 * @import is.number
 * 
 * @import is.string
 * 
 * @import parse from date.parse
 * 
 * @param {mixed} data 数据
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {string} [config.format] 日期格式字符串
 * 
 * @return {Date} 转换后的日期对象
 * 
 */

 if(isNumber(data)){

    return new Date(data) ;
 }

 if(isString(data)){

    return parse(data , format) ;
 }

 return null ;