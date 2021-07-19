
/**
 * 
 * 插入节点
 * 
 * @import insert from ..api.insert scoped
 * 
 * @import from from ..from scoped
 * 
 * @param {mixed} node 需要插入的节点
 * 
 * @param {mixed} baseNode 参照节点
 * 
 * @param {string} region 插入偏移位置
 * 
 * @return {boolean} 如果插入节点成功则返回 true , 否则返回 false
 * 
 */

node = insert(node ,baseNode , region) ;

return node && !node.hidden ;
