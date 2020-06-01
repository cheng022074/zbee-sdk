
/**
 * 
 * 开始重组节点
 * 
 * @import getDescendantNodes from ....nodes.relation.descendant
 * 
 * @import isRootNode from ....node.is.root scoped
 * 
 * @import fireDrawEvent from ....fire.draw scoped
 * 
 * 
 */

 let me = this,
 {
    selectedNode
 } = me;

 if(isRootNode(selectedNode)){

    return ;
 }

 me.restructuring = true ;

 selectedNode.restructuring = true ;

 let nodes = getDescendantNodes(selectedNode) ;

 for(let node of nodes){

   node.restructuring = true ;
 }

 fireDrawEvent() ;