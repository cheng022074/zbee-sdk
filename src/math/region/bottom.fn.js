
/**
 * 
 * 计算下边值
 * 
 * @import is.defined
 * 
 * @param {object} config 配置
 * 
 * @return {number} 下边数值 
 * 
 */

 let {
    y,
    height,
    bottom
 } = config ;

 if(isDefined(bottom)){

    return bottom ;
 }

return y + height ;