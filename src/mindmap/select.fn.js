
/**
 * 
 * 选定节点
 * 
 * @import fireDrawEvent from .fire.draw scoped
 * 
 * @param {string} id 节点编号
 * 
 */

 let {
    visibilityNodes
 } = this ;

 if(visibilityNodes.has(id)){

    visibilityNodes.get(id).selected = true ;

    fireDrawEvent() ;
 }