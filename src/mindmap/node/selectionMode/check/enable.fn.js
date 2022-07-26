
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
 * @param {boolean} [checked = false] 节点初始选中状态
 * 
 */  

 node = from(node) ;

 if(!node.checkSelectionMode){

    node.checkSelectionMode = true ;

    node.checked = checked ;

    getDescendantNodes(node).forEach(node => {

      node.checkSelectionMode = true ;

      node.checked = checked ;

    }) ;

    return true ;
 }

 return false ;

