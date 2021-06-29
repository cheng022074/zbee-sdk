
/**
 * 
 * 添加子节点
 * 
 * @import data from .data scoped
 * 
 * @import from from .from scoped
 * 
 * @import fireChangeEvent from ..fire.event.change scoped
 * 
 * @import getPreviousNode from .sibling.previous scoped
 * 
 * @import append from .ds.append scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 * @return {boolean} 添加标识
 * 
 */

node = from(node) ;

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
}

if(append(node , parentNode)){

  parentNode = from(parentNode) ;

  let me = this,
  {
    placeholderNode
  } = me ;

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

    fireChangeEvent({
      operation:oldPositionInfo ? 'move' : 'create',
      node:dataNode,
      positionInfo,
      oldPositionInfo
    }) ;
  }

  return true ;

}

return false ;

