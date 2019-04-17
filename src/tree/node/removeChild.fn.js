
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
    $children
 } = this ;

 if($children.includes(node)){

   remove($children , node) ;

   delete node.parentNode ;

   me.emit('remove' , me , node) ;
 }