
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

 let {
    visibilityNodes
 } = this ;

 if(visibilityNodes.has(id)){

    visibilityNodes.get(id).selected = true ;

    if(isFireDrawEvent){

      fireDrawEvent() ;
    }    
 }