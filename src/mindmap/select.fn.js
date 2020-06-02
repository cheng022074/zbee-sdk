
/**
 * 
 * 选定节点
 * 
 * @import fireDrawEvent from .fire.draw scoped
 * 
 * @param {string} id 节点编号
 * 
 * @param {boolean} [isFireDrawEvent = true] 是否派发重绘事件 
 * 
 */

 let me = this,
 {
    visibilityNodes,
    selectedNode
 } = me ;

 if(selectedNode.id !== id && visibilityNodes.has(id)){

    visibilityNodes.get(id).selected = true ;
        
    me.fireEvent('select' , id) ;

    if(isFireDrawEvent){

      fireDrawEvent() ;
    }    
 }