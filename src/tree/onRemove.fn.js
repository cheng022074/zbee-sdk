
/**
 * 
 * 删除子节点
 * 
 * @import remove from array.remove
 * 
 * @param {tree.Node} removeNode 子节点
 * 
 */

 let me = this,
 {
    nodes
 } = me,
 index = nodes.indexOf(removeNode);

 remove(nodes , removeNode) ;

 me.emit('remove' , index , removeNode.data) ;