
/**
 * 
 * 脑图节点的左侧间距
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
    left
 } = this.layoutConfig.nodeSpacing;

 if(isFunction(left)){

    return left(data(node)) ;
 }

 return left ;