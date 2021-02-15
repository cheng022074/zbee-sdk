
/**
 * 
 * 判断是否为根节点
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {boolean} 如果为根节点则返回 true , 否则返回 false 
 * 
 */

return !getParentNode(node) ;