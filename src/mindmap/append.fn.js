
/**
 * 
 * 在选定节点下添加一个子节点
 * 
 * @import generate from id.generate
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
    selectedNode,
    reader
 } = me,
 {
    expanded,
    children,
    id
 } = selectedNode,
 childNode = reader.create({
   ...node,
   id:generate('node-'),
   children:[],
   parentNodeId:id,
   selected:true
 }) ;

 children.push(childNode) ;

 selectedNode.selected = false ;

 me.selectedNode = childNode ;

 if(expanded){

   childNode.hidden = false ;

 }else{

   expand(selectedNode) ;
   
 }

 tryLayout() ;