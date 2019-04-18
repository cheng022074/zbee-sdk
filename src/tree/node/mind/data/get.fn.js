
/**
 * 
 * 获取节点的简单JSON数据
 * 
 * @import getData from tree.node.data.get scoped
 * 
 * @return {object} JSON 数据
 * 
 */

let {
    x,
    y,
    width,
    height
} = this;

 return {
    ...getData(),
    x,
    y,
    width,
    height
 } ;