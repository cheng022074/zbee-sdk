
/**
 * 
 * 清除所有节点
 * 
 */

 let {
     nodes
 } = this ;

 for(let node of nodes){

    node.destroy() ;
 }

 nodes.length = 0 ;