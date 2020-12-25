
/**
 * 
 * 获取所有叶子节点
 * 
 * @import equals from ......data.node.equals scoped
 * 
 * @import getDescendantNodes from ..descendant scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {array} 节点集合 
 * 
 */

return getDescendantNodes(node , itemNode => ({
    result:true,
    next:equals(node , itemNode)
})) ;