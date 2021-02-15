
/**
 * 
 * 脑图节点的底部间距
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
    spacing = {}
 } = this.layoutConfig,
 {
    bottom
 } = spacing;

 if(isFunction(bottom)){

    return bottom(data(node)) ;
 }

 return bottom ;