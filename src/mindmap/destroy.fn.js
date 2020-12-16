
/**
 * 
 * 销毁脑图实例
 * 
 * @import remove from .node.delete scoped
 * 
 */

 let {
    rootNode,
    nodes,
    visibilityNodes,
    unsizedNodes,
    leafNodes
 } = this,{
    children
 } = rootNode ;

 for(let childNode of children){

    remove(childNode) ;
 }

 nodes.clear() ;

 visibilityNodes.clear() ;

 unsizedNodes.clear() ;

 leafNodes.clear() ;






