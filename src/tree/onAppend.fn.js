
/**
 * 
 * 添加新节点
 * 
 * @param {tree.Node} parentNode 父节点
 * 
 * @param {tree.Node} appendNode 添加节点
 * 
 */

 let me = this ;

 me.nodes.push(appendNode) ;

 me.emit('append' , parentNode.data , appendNode.data) ;