/*
 * 
 * 获取数字的实际小数位数
 * 
 * @param {number} data 数字
 * 
 * @return {number} 小数位数
 * 
 */

/\.(\d+)$/.exec(String(data)) ;

return RegExp.$1.length ;