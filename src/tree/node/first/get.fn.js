
/**
 * 
 * 获得第一个子节点引用
 * 
 * @return {tree.Node} 树型节点
 * 
 */

 let {
    $children:children
 } = this ;

 if(children.length){

    return children[0] ;
 }