
/**
 * 
 * 寻找符合查询条件的记录
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @param {mixed} property 属性名称
 * 
 * @param {mixed} value 属性值
 * 
 * @return {array} 查询出来的数据记录
 * 
 */

 let {
    recordset
 } = this ;

 return recordset.findRecords(property , value) ;