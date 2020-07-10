
/**
 * 
 * 选定节点
 * 
 * @import data from .node.data scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import cancelEllipsis from .node.ellipsis.cancel scoped
 * 
 * @import ellipsis from .node.ellipsis scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @import waitNodeSized from .node.sized.wait scoped
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
    restructuring,
    ellipsisPattern
 } = me;

 if(!restructuring && selectedNode.id !== id && nodes.has(id)){

  cancelEllipsis() ;

  let node = nodes.get(id) ;

  if(node.hidden){

      let parentNode,
          baseNode = node,
          parentNodes = [];

      while(parentNode = getParentNode(baseNode)){

        if(parentNode.expanded){

          break ;
        }

        parentNodes.unshift(parentNode) ;

        baseNode = parentNode ; 
      }

      for(let parentNode of parentNodes){

        expand(parentNode) ;
      }

      await waitNodeSized() ;
  }

  node.selected = true ;

  if(ellipsisPattern){

    ellipsis(node) ;
  }
      
  me.fireEvent('nodeselect' , data(node)) ;

  if(isLayout){

    layout() ;
  
  }    
 }