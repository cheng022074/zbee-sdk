
/**
 * 
 * 获取树型节点在线性表中的位置
 * 
 * @return {number} 位置信息
 * 
 */

 let me = this,
 {
     nodes
 } = me.tree.list ;

 console.log('节点列表' , nodes) ;

 return nodes.indexOf(me) ;