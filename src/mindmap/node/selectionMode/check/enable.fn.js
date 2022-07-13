
/**
 * 
 * 开启选择模式
 * 
 * @import from from mindmap.node.from scoped
 * 
 * @import getDescendantNodes from mindmap.nodes.descendant scoped
 * 
 * @param {mixed} node 节点
 * 
 */  

 node = from(node) ;

 if(!node.checkSelectionMode){

    node.checkSelectionMode = true ;

    node.checked = true ;

    getDescendantNodes(node).forEach(node => {

      node.checkSelectionMode = true ;

      node.checked = true ;

    }) ;

    return true ;
 }

 return false ;

