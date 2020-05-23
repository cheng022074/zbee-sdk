
/**
 * 
 * 计算右边值
 * 
 * @import is.defined
 * 
 * @param {object} config 配置
 * 
 * @return {number} 右边数值 
 * 
 */

let {
    x,
    width,
    right
 } = config ;

 if(isDefined(right)){

    return right ;
 }

return x + width ;