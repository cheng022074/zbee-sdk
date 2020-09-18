
/**
 * 
 * 获取所有叶子节点
 * 
 * @import isLeafNode from ......data.node.is.leaf scoped
 * 
 * @import getDescendantNodes from ..descendant scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {array} 节点集合 
 * 
 */

 return getDescendantNodes(node , node => ({
   result:isLeafNode(node),
   next:true
 })) ;