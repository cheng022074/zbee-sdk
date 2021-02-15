
/**
 * 
 * 脑图节点的右侧间距
 * 
 * @import is.function
 * 
 * @import data from ..data.param scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {number} 间距值
 * 
 */

let {
    right
 } = this.layoutConfig.nodeSpacing;

 if(isFunction(right)){

    return right(data(node)) ;
 }

 return right ;