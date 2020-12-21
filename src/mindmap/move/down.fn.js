/**
 * 
 * 选中节点向下移动
 * 
 * @import next from ..node.sibling.next scoped
 * 
 * @import insertAfter from ..node.insert.after scoped
 * 
 */

let me = this,
{
   selectedNode
} = me,
node = next(selectedNode) ;

if(node){

    insertAfter(selectedNode , node) ;

    selectedNode.selected = true ;

    me.layout() ;
    
}else{

   let {
      visibilityNodes
   } = me ;

   let node = visibilityNodes.getNearestNode(selectedNode , 'down') ;

   if(node){

        insertAfter(selectedNode , node) ;

        selectedNode.selected = true ;

        me.layout() ;
   }
}