
/**
 * 
 * 选定节点
 * 
 * @import data from .node.data scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import ellipsis from .node.ellipsis scoped
 * 
 * @param {string} id 节点编号
 * 
 * @param {boolean} [isLayout = true] 是否重新布局 
 * 
 */

 let me = this,
 {
    nodes,
    selectedNode,
    restructuring
 } = me;

 if(!restructuring && selectedNode.id !== id && nodes.has(id)){

  let node = nodes.get(id) ;

  if(node.hidden){

  }

  node.selected = true ;

  ellipsis(node) ;
      
  me.fireEvent('nodeselect' , data(node)) ;

  if(isLayout){

    layout() ;
  
  }    
 }