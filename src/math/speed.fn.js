
/**
 * 
 * 计算出速度值
 * 
 * @param {number} value 移动值
 * 
 * @param {string} [unit = 'ms'] 时间单位
 * 
 * @return {number} 返回说明 
 * 
 */

switch(unit){

    case 'ms':

        return value ;

    case 's':

        return value / 1000 ;

    case 'm':

        return value / 1000 / 60 ;


    case 'h':

        return value / 1000 / 60 / 60 ;
}

return 0 ;
