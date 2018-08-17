/**
 * 
 * 判定数据是否为数值类型
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果给定值为数值类型则返回 true , 否则返回 false 
 * 
 */

return !isNaN(parseFloat(data)) && isFinite(data);