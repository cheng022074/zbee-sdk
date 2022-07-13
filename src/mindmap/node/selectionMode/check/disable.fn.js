
/**
 * 
 * 关闭选择模式
 * 
 * @import from from mindmap.node.from scoped
 * 
 * @import getDescendantNodes from mindmap.nodes.descendant scoped
 * 
 * @param {mixed} node 节点
 * 
 */  

 node = from(node) ;

 if(node.checkSelectionMode){

    node.checkSelectionMode = false ;

    node.checked = false ;

    getDescendantNodes(node).forEach(node => {

        node.checkSelectionMode = false ;

        node.checked = false ;

    }) ;

    return true ;
 }

 return false ;

