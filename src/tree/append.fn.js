
/**
 * 
 * 新增一个节点进队列
 * 
 * @param {number} parentNode 父节点
 * 
 * @param {tree.Node} node 节点
 * 
 */

 let me = this ;

 if(me.loading){

    return ;
 }

 let {
    nodes,
    proxy
 } = me,
 {
   last:lastNode
 } = parentNode,
 index;

 if(lastNode){

   index = nodes.indexOf(lastNode) ;
 
 }else{

   index = nodes.indexOf(parentNode) ;
 }

 nodes.splice(index + 1 , 0 , node) ;
 
 proxy.call('insert' , node.data , index) ;
