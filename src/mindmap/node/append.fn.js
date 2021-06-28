
/**
 * 
 * 添加子节点
 * 
 * @import data from .data scoped
 * 
 * @import show from .show scoped
 * 
 * @import getLastChildNode from .child.last scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import from from .from scoped
 * 
 * @import fireChangeEvent from ..fire.event.change scoped
 * 
 * @import getPreviousNode from .sibling.previous scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 * @return {boolean} 添加标识
 * 
 */

 node = from(node) ;

 parentNode = from(parentNode) ;

 let me = this,
 {
   placeholderNode
 } = me ;

if(parentNode === node || getLastChildNode(parentNode) === node || parentNode === placeholderNode){

  return false;

}

let oldPositionInfo,
{
  parentNodeId
} = node;

if(parentNodeId){

  oldPositionInfo = {
    parentNodeId
  } ;

  let previousNode = getPreviousNode(node) ;

  if(previousNode){

    oldPositionInfo.previousNodeId = previousNode.id ;
  }

  let {
      children
  } = getParentNode(node) ;

  node.parentNodeId = null ;

  node.hidden = true ;

  children.splice(children.indexOf(node) , 1) ;
}

let {
    children,
    hidden,
    expanded
} = parentNode;

children.push(node) ;

node.parentNodeId = parentNode.id ;

if(!hidden && expanded){

  show(node) ;
}

if(node !== placeholderNode){

  let
    dataNode = data(node),
    dataParentNode = data(parentNode) ; 

  me.fireEvent('nodeappend' , dataNode , dataParentNode) ;

  let previousNode = getPreviousNode(node),
      positionInfo = {
        parentNodeId:dataParentNode.id
      };

  if(previousNode){

    positionInfo.previousNodeId = previousNode.id ;
  }

  if(oldPositionInfo){

    fireChangeEvent('move' , dataNode , positionInfo , oldPositionInfo) ;

  }else{

    fireChangeEvent('create' , dataNode , positionInfo) ;
  }
}

return true ;

