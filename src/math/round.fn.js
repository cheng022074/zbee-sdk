
/**
 * 
 * 实现四舍五入
 * 
 * @param {number} data 数值
 * 
 * @param {number} [digit = 0] 保留小数点位数
 * 
 * @return {number} 四舍五入后的数值
 * 
 */

 if(digit === 0){

    return Math.round(data) ;
 }

 return Math.round(data * Math.pow(10 , digit)) / Math.pow(10 , digit);