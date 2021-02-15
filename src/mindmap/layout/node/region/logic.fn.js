
/**
 * 
 * 获得脑图节点的范围
 * 
 * @import self from .self scoped
 * 
 * @import descendant from .descendant.logic scoped
 * 
 * @import union from math.region.union
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {object} 范围信息
 * 
 */

 return union(self(node) , descendant(node)) ;