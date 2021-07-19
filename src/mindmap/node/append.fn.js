
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
 * @import append from .api.append scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 * @return {boolean} 添加标识
 * 
 */

let appendNode = from(node),
    oldPositionInfo ;

if(appendNode){

  let {
    parentNodeId
  } = appendNode;
  
  if(parentNodeId){
  
    oldPositionInfo = {
      parentNodeId
    } ;

    let previousNode = getPreviousNode(appendNode) ;

    if(previousNode){

      oldPositionInfo.previousNodeId = previousNode.id ;
    }
  }

}

if(appendNode = append(node , parentNode)){

  parentNode = from(parentNode) ;

  let me = this,
  {
    placeholderNode
  } = me ;

  if(appendNode !== placeholderNode){

    let
      dataNode = data(appendNode),
      dataParentNode = data(parentNode) ; 

    me.fireEvent('nodeappend' , dataNode , dataParentNode) ;

    let previousNode = getPreviousNode(appendNode),
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

  return appendNode ;

}

return false ;

