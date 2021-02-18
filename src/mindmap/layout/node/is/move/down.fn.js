/**
 * 
 * 选中节点向下移动
 * 
 * @import next from ....sibling.next scoped
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @import data from mindmap.node.data scoped
 * 
 * @param {function} [beforeMoveFn = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

 function main(beforeMoveFn){

   let me = this,
   {
      selectedNode
   } = me ;

   return doMoveDown.call(me , next(selectedNode) , beforeMoveFn) ;
 }

 function doMoveDown(node , beforeMoveFn){

   let {
      selectedNode
   } = this ;

   return !! (node && beforeMoveFn(data(getParentNode(node)) , data(selectedNode) , data(node))) ;
 }