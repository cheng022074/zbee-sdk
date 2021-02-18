
/**
 * 
 * 选定节点
 * 
 * @import data from .data scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import from from .from scoped
 * 
 * @import expand from .expand scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {Boolean} 如果成功选定节点则返回 true , 否则返回  false
 * 
 */

node = from(node) ;

let me = this,
{
  selectedNode
} = me;

if(node !== selectedNode){

  if(node.hidden){

      let parentNode,
          baseNode = node,
          parentNodes = [];

      while(parentNode = getParentNode(baseNode)){

        parentNodes.unshift(parentNode) ;

        if(!parentNode.hidden){

          break ;          
        
        }else{

          baseNode = parentNode ; 
        }
      }

      for(let parentNode of parentNodes){

        expand(parentNode) ;

      }
  }

  node.selected = true ;

  me.fireEvent('nodeselect' , data(node) , data(selectedNode)) ;

  return true ;

}

return false ;