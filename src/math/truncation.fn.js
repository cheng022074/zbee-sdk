
/**
 * 
 * 实现小数点后截断
 * 
 * @param {number} data 数值
 * 
 * @param {number} [digit = 0] 保留小数点位数
 * 
 * @return {number} 截断后的数据
 * 
 */

if(digit === 0){

    return Math.trunc(data) ;
 }

 return Math.trunc(data * Math.pow(10 , digit)) / Math.pow(10 , digit);