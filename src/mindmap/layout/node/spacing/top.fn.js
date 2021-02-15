
/**
 * 
 * 脑图节点的顶部间距
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
    top
 } = spacing;

 if(isFunction(top)){

    return top(data(node)) ;
 }

 return top ;