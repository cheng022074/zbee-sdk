
/**
 * 
 * 增加子节点
 * 
 * @param {tree.Node} appendNode 子节点
 * 
 */

let me = this,
{
   nodes
} = me ;

nodes.push(appendNode) ;

me.emit('append' , appendNode.data) ;