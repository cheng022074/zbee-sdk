
/**
 * 
 * 获得纪录在存储器中的位置
 * 
 * @param {data.Model} record 数据记录
 * 
 * @return {number} 记录位置信息 
 * 
 */

 let {
    recordset
 } = this ;

 return recordset.indexOf(record) ;