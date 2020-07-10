
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
 * @import get from ..get scoped
 * 
 * @param {string} id 节点编号
 * 
 */

 let me = this,
     selectedNode = get(id) ;

 if(!selectedNode || isRootNode(selectedNode)){

    return ;
 }

 me.restructuring = true ;

 selectedNode.restructuring = true ;

 me.restructuredNode = selectedNode ;

 let nodes = getDescendantNodes(selectedNode) ;

 for(let node of nodes){

   node.restructuring = true ;
 }

 fireDrawEvent() ;