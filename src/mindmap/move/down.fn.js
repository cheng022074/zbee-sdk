/**
 * 
 * 选中节点向下移动
 * 
 * @import next from ..node.sibling.next scoped
 * 
 * @import insertAfter from ..node.insert.after scoped
 * 
 * @import order from ..order scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @param {boolean} [isRealMove = true] 是否真实移动
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

 function main(isRealMove){

   let me = this,
   {
      selectedNode,
      visibilityNodes
   } = me ;

   if(isRealMove){

      if(!doMoveDown.call(me , next(selectedNode))){

         return !!(visibilityNodes && doMoveDown.call(me , visibilityNodes.getNearestNode(selectedNode , 'down'))) ;
      }
   
   }else if(!next(selectedNode)){

      return !!(visibilityNodes && visibilityNodes.getNearestNode(selectedNode , 'down')) ;
   }

   return true ;
 }

 function doMoveDown(node){

   let me = this,
   {
      selectedNode
   } = me ;

   if(node){

      insertAfter(selectedNode , node) ;

      selectedNode.selected = true ;

      me.fireEvent('nodeinsertafter' , data(selectedNode) , data(node) , false) ;

      order(getParentNode(node)) ;

      me.layout() ;

      return true ;
   }

   return false ;
 }