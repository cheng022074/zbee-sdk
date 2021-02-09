
/**
 * 
 * 注销未发布的脑图节点
 * 
 * @param {data.Record} node 脑图节点
 * 
 */

let me = this,
{
   unpublishedNodes
} = me;

unpublishedNodes.delete(node) ;