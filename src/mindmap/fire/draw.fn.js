
/**
 * 
 * 触发绘制事件
 * 
 * @import region from ..region scoped
 * 
 * @import data from ..data scoped
 * 
 * @import getRootNode from ..node.root scoped
 * 
 * @import getDescendantNodes from ..nodes.relation.descendant scoped
 * 
 */

 let me = this,
 {
    rootNode,
    visibilityNodes
 } = me,
 mindNodes;

 if(rootNode === getRootNode()){

   mindNodes = visibilityNodes.values();
 
 }else{

   rootNode = getRootNode() ;

   mindNodes = [
      rootNode,
      ...getDescendantNodes(rootNode)
   ] ;
 }

 let {
     nodes,
     selectedNode,
     lines
 } = data(mindNodes , true),
 params = {
   nodes,
   lines,
   selectedNode,
   canvas:region()
};

 me.fireEvent('draw' , params) ;