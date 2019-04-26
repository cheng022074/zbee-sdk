
/**
 * 
 * 获取节点的简单JSON数据
 * 
 * @import copy from object.copy
 * 
 * @return {object} JSON 数据
 * 
 */

 let me = this,
 {
    fields
 } = me.tree;

 return copy({
   leaf:me.isLeaf
 } , me , fields) ;