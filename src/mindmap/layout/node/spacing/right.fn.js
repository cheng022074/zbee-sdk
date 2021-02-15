
/**
 * 
 * 脑图节点的右侧间距
 * 
 * @import is.function
 * 
 * @import data from mindmap.node.data scoped
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
    right
 } = spacing;

 if(isFunction(right)){

    return right(data(node)) ;
 }

 return right ;