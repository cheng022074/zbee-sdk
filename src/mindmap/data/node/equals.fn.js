
/**
 * 
 * 判断脑图节点是否相等
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node1 脑图节点
 * 
 * @param {mixed} node2 脑图节点
 * 
 * @return {boolean} 如果两个脑图节点相等则返回 true , 否则返回 false
 * 
 */

 let {
    id:id1
 } = from(node1),
 {
    id:id2
 } = from(node2);

 return id1 === id2 ;