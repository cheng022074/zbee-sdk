
/**
 * 
 * 添加子节点
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} node 子节点
 * 
 */

 let me = this,
 {
    $children,
    tree
 } = me ;

 if(isObject(node)){

    node = tree.read(node) ;

    if(!node){

      return ;
    }
 }

 let {
    parentNode
 } = node;

 if(parentNode){

   parentNode.removeChild(node) ;
   
 }

 if(!$children.includes(node)){

   tree.append(me , node) ;

   node.parentNode = me ;

   $children.push(node) ;

   return node ;
 }