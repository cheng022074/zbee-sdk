
/**
 * 
 * 清除所有节点
 * 
 * @import from from array.from
 * 
 */

 let me = this,
 {
     nodes,
     proxy
 } = me ;

 nodes = from(nodes) ;

 for(let node of nodes){

    node.destroy() ;
 }

 delete me.rootNode ;

 me.nodes.length = 0 ;

 proxy.call('clear') ;