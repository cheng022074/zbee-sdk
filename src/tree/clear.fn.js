
/**
 * 
 * 清除所有节点
 * 
 * @import from from array.from
 * 
 */

 let me = this,
 {
     nodes
 } = me ;

 for(let node of nodes){

    node.destroy() ;
 }

 nodes.length = 0 ;

 me.emit('clear') ;