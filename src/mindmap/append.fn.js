
/**
 * 
 * 在选定节点下添加一个子节点
 * 
 * @import append from .node.append scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @import tryLayout from .layout.try scoped
 * 
 * @param {object} [node = {}] 子节点配置信息
 * 
 */

 let me = this,
 {
    selectedNode
 } = me,
 {
    expanded
 } = selectedNode;

 node = append(selectedNode , node) ;

 selectedNode.selected = false ;

 node.selected = true ;

 me.selectedNode = node ;

 if(expanded){

  node.hidden = false ;

 }else{

   expand(selectedNode) ;
   
 }

 tryLayout() ;