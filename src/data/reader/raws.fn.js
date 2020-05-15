
/**
 * 
 * 获取一组原始数据用来解析数据记录
 * 
 * @import from from array.from
 * 
 * @param {mixed} data 原始数据
 * 
 * @return {array} 一组原始数据 
 * 
 */

let {
    rootProperty,
    getData
} = this ;

return from(getData(data , rootProperty)) ;