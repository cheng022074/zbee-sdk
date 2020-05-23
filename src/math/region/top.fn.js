
/**
 * 
 * 计算顶边值
 * 
 * @import is.defined
 * 
 * @param {object} config 配置
 * 
 * @return {number} 顶边数值 
 * 
 */

let {
    y,
    top
 } = config ;

 if(isDefined(top)){

    return top ;
 }

return y ;