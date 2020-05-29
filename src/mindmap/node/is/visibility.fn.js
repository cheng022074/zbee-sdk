
/**
 * 
 * 是否为可见节点
 * 
 * @param {data.Record}  node
 * 
 * @return {boolean} 如果为可见节点则返回 true , 否则返回 false 
 * 
 */

 return node.hidden === false && node.placeholder !== true && node.restructuring !== true;