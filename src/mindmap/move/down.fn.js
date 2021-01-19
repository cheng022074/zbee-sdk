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

   if(isRealMove){

      if(!doMoveDown.call(me , next(selectedNode) , beforeMoveFn)){

         return !!(visibilityNodes && doMoveDown.call(me , visibilityNodes.getNearestNode(selectedNode , 'down') , beforeMoveFn)) ;
      }
   
   }else if(!next(selectedNode)){

      return !!(visibilityNodes && visibilityNodes.getNearestNode(selectedNode , 'down')) ;
   }

   return true ;
 }

 function doMoveDown(node , beforeMoveFn){

   let me = this,
   {
      selectedNode
   } = me ;

   if(node && beforeMoveFn(data(getParentNode(selectedNode)) , data(node) , data(selectedNode))){

      insertAfter(selectedNode , node) ;

      return true ;
   }

   return false ;
 }