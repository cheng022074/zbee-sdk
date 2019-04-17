
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

 for(let node of nodes){

    node.destroy() ;
 }

 nodes.length = 0 ;

 delete me.rootNode ;

 proxy.call('clear') ;