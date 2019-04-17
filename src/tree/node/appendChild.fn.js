
/**
 * 
 * 添加子节点
 * 
 * @param {tree.node} node 子节点
 * 
 */

 let me = this,
 {
    $children
 } = me,
 {
    parentNode
 } = node;

 if(parentNode){

   parentNode.removeChild(node) ;
   
 }

 if(!$children.includes(node)){

    $children.push(node) ;

    node.parentNode = me ;

    me.emit('append' , me , node) ;
 }