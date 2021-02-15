
/**
 * 
 * 判断是否为叶子节点
 * 
 * @import getChildNodes from ....nodes.child scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {boolean} 如果为叶子节点则返回 true , 否则返回 false 
 * 
 */

 return getChildNodes(node).length === 0 ;