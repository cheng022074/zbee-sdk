
/**
 * 
 * 指定节点是否为未发布脑图节点
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {boolean} 如果指定节点是未发布脑图节点则返回 true , 否则返回 false
 * 
 */

let me = this,
{
   unpublishedNodes
} = me;

return unpublishedNodes.has(node) ;