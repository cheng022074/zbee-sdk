
/**
 * 
 * 获得最后一个子节点引用
 * 
 * @return {tree.Node} 树型节点
 * 
 */

let {
    $children:children
 } = this,
 {
     length
 } = children;

 if(length){

    return children[length - 1] ;
 }