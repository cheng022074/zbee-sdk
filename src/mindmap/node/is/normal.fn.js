
/**
 * 
 * 是否为正常可见节点
 * 
 * @import is from .visibility
 * 
 * @param {data.Record}  node
 * 
 * @return {boolean} 如果为正常节点则返回 true , 否则返回 false 
 * 
 */

 return is(node) && node.placeholder === false && node.restructuring === false;