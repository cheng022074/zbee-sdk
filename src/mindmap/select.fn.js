
/**
 * 
 * 选定节点
 * 
 * @import data from .node.data scoped
 * 
 * @import cancelEllipsis from .node.ellipsis.cancel scoped
 * 
 * @import ellipsis from .node.ellipsis scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @param {string} id 节点编号
 * 
 * @return {Boolean} 如果成功选定节点则返回 true , 否则返回  false
 * 
 */

 function main(id){

    let me = this,
    {
      nodes,
      selectedNode,
      restructuring,
      ellipsisPattern
    } = me;
  
    if(!restructuring && (selectedNode ? selectedNode.id !== id : true) && nodes.has(id)){

      if(ellipsisPattern){

        cancelEllipsis() ;
      }
  
      let node = nodes.get(id) ;
    
      if(node.hidden){
    
          let parentNode,
              baseNode = node,
              parentNodes = [];
    
          while(parentNode = getParentNode(baseNode)){
    
            parentNode.hidden = false ;
    
            parentNodes.unshift(parentNode) ;
    
            baseNode = parentNode ; 
          }
    
          for(let parentNode of parentNodes){
    
            expand(parentNode) ;
          }
      }
    
      node.selected = true ;
    
      if(ellipsisPattern){
    
        ellipsis(node) ;
    
        initVisibilityLevel(node , me.visibilityLevel) ;
      }

      me.fireEvent('nodeselect' , data(node)) ;

      me.layout() ;

      return true ;

    }

    return false ;
 }

 function initVisibilityLevel(node , maxLevel , level = 1){

  if(level < maxLevel){

      expand(node) ;

      let {
        children
      } = node ;

      for(let childNode of children){

        initVisibilityLevel(childNode , maxLevel , level + 1) ;
        
      }
  }
}