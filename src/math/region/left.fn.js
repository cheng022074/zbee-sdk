
/**
 * 
 * 计算左边值
 * 
 * @import is.defined
 * 
 * @param {object} config 配置
 * 
 * @return {number} 左边数值 
 * 
 */

let {
    x,
    left
 } = config ;

 if(isDefined(left)){

    return left ;
 }

return x ;