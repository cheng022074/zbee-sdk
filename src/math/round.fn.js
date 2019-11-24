
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

for(let i = 0 ; i < digit ; i ++){

    data *= 10 ;
}

data = Math.round(data) ;

for(let i = 0 ; i < digit ; i ++){

    data /= 10 ;
}

return data ;