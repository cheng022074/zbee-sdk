/**
 * 
 * 选中节点向上移动
 * 
 * @import previous from ..node.sibling.previous scoped
 * 
 * @import insertBefore from ..node.insert.before scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @import order from ..order scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @param {boolean} [isRealMove = true] 是否真实移动
 * 
 * @param {function} [beforeMoveFn = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

 function main(isRealMove , beforeMoveFn){

    let me = this,
    {
        selectedNode,
        visibilityNodes
    } = me ;

    if(isRealMove){

        if(!doMoveUp.call(me , previous(selectedNode) , beforeMoveFn)){

            return !!(visibilityNodes && doMoveUp.call(me , visibilityNodes.getNearestNode(selectedNode , 'up') , beforeMoveFn)) ;
         }

    }else if(!previous(selectedNode)){

        return !!(visibilityNodes && visibilityNodes.getNearestNode(selectedNode , 'up')) ;
    }

    return true ;
 }

 function doMoveUp(node , beforeMoveFn){

    let me = this,
    {
       selectedNode
    } = me ;
 
    if(node && beforeMoveFn(data(getParentNode(selectedNode)) , data(node))){
 
        insertBefore(selectedNode , node) ;

        selectedNode.selected = true ;
    
        me.fireEvent('nodeinsertbefore' , data(selectedNode) , data(node) , false) ;
    
        order(getParentNode(node)) ;
    
        me.layout() ;
 
       return true ;
    }
 
    return false ;
  }