
/**
 * 
 * 删除子节点
 * 
 * @import remove from array.remove
 * 
 * @param {tree.node} node 子节点
 * 
 */

 let {
    $children,
    tree
 } = this ;

 if($children.includes(node)){

   tree.removeQueue(node) ;

   remove($children , node) ;

   delete node.parentNode ;
 }