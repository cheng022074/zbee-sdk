
/**
 * 
 * 向右移动选择节点
 * 
 * @import select from ....select scoped
 * 
 * @import expand from ....expand scoped
 * 
 * @import right from .right scoped
 * 
 * @import isLeaf from ....node.is.leaf scoped
 * 
 */

let me = this,
{
    selectedNode
 } = this,
 {
     expanded
 } = selectedNode;

 if(expanded){

    let {
        children
    } = selectedNode ;

    if(children.length){

        return await select(children[0].id) ;
    }

 }else if(!isLeaf(selectedNode)){

    await expand(selectedNode.id) ;

    return await right() ;
 
 }else{

    let {
        visibilityNodes
     } = me ;
  
     let node = visibilityNodes.getNearestNode(selectedNode , 'right') ;
  
     if(node){
  
        return await select(node.id) ;
     }
 }

 return false ;