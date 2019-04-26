
/**
 * 
 * 删除子节点
 * 
 * @import remove from array.remove
 * 
 * @param {tree.node} node 子节点
 * 
 */

 let me = this,
 {
    $children,
    tree
 } = me ;

 if($children.includes(node)){

   remove($children , node) ;

   me.fireEvent('remove' , node) ;

   delete node.parentNode ;
 }