
/**
 * 
 * 新增一个节点进队列
 * 
 * @param {number} parentNode 父节点
 * 
 * @param {tree.Node} node 节点
 * 
 */

 let {
   list
 } = this ;

 if(list){

    list.append(parentNode , node.list) ;
 }