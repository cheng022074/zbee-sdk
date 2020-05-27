
/**
 * 
 * 在选定节点下添加一个子节点
 * 
 * @import expand from .expand scoped
 * 
 * @import tryLayout from .layout.try scoped
 * 
 * @param {object} [node = {}] 子节点配置信息
 * 
 */

 let {
    selectedNode,
    reader
 } = this,
 {
    expand,
    children
 } = selectedNode,
 childNode = reader.create({
   ...node,
   id:generate('node-'),
   children:[]
 }) ;

 children.push(childNode) ;

 if(expand){

   childNode.hidden = false ;

   tryLayout() ;

 }else{

   expand() ;
   
 }