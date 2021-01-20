/**
 * 
 * 选中节点向下移动
 * 
 * @import next from ..node.sibling.next scoped
 * 
 * @import insertAfter from ..insert.after scoped
 * 
 * @import order from ..order scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @param {boolean} [isRealMove = true] 是否真实移动
 * 
 * @param {function} [beforeMoveFn = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

 function main(isRealMove , beforeMoveFn){

   let me = this,
   {
      selectedNode,
      visibilityNodes
   } = me ;

   if(!doMoveDown.call(me , next(selectedNode) , beforeMoveFn , isRealMove)){

      return !!(visibilityNodes && doMoveDown.call(me , visibilityNodes.getNearestNode(selectedNode , 'down') , beforeMoveFn , isRealMove)) ;
   }

   return true ;
 }

 function doMoveDown(node , beforeMoveFn , isRealMove){

   let me = this,
   {
      selectedNode
   } = me ;

   if(node && beforeMoveFn(data(getParentNode(node)) , data(selectedNode) , data(node))){

      if(isRealMove){

         insertAfter(selectedNode , node) ;
      }

      return true ;
   }

   return false ;
 }