
/**
 * 
 * 移除树型节点
 * 
 * @import unwatch from .node.unwatch scoped
 * 
 * @param {tree.Node} removeNode 节点配置
 * 
 */

 let me = this,
 {
    nodes
 } = me,
 index = nodes.indexOf(removeNode);

 remove(nodes , removeNode) ;

 unwatch(removeNode) ;

 me.emit('remove' , index , removeNode.data) ;