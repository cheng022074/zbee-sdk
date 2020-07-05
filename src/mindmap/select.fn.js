
/**
 * 
 * 选定节点
 * 
 * @import fireDrawEvent from .fire.draw scoped
 * 
 * @import data from .node.data scoped
 * 
 * @import cancelEllipsis from .node.ellipsis.cancel.active scoped
 * 
 * @param {string} id 节点编号
 * 
 * @param {boolean} [isFireDrawEvent = true] 是否派发重绘事件 
 * 
 */

 let me = this,
 {
    visibilityNodes,
    selectedNode,
    restructuring,
    ellipsisRootNode
 } = me ;

 if(ellipsisRootNode && ellipsisRootNode.id === id){

  cancelEllipsis() ;
    
 }else if(!restructuring && selectedNode.id !== id && visibilityNodes.has(id)){

   let node = visibilityNodes.get(id) ;

   node.selected = true ;
        
   me.fireEvent('nodeselect' , data(node)) ;

    if(isFireDrawEvent){

      fireDrawEvent() ;
    }    
 }