
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
 * @import from from .node.from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {Boolean} 如果成功选定节点则返回 true , 否则返回  false
 * 
 */

 function main(node){

    node = from(node) ;

    let me = this,
    {
      selectedNode,
      restructuring,
      ellipsisPattern
    } = me;
  
    if(!restructuring && node !== selectedNode){

      if(ellipsisPattern){

        cancelEllipsis() ;
      }
  
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

            let {
              children
            } = parentNode ;

            for(let childNode of children){

              childNode.hidden = false ;

            }
          }
      }
    
      node.selected = true ;
    
      if(ellipsisPattern){
    
        ellipsis(node) ;

      }

      me.fireEvent('nodeselect' , data(node) , data(selectedNode)) ;

      me.layout() ;

      return true ;

    }

    return false ;
 }