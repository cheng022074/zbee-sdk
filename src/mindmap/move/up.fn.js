/**
 * 
 * 选中节点向上移动
 * 
 * @import previous from ..node.sibling.previous scoped
 * 
 * @import insertBefore from ..insert.before scoped
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

    if(!doMoveUp.call(me , previous(selectedNode) , beforeMoveFn , isRealMove)){

        return !!(visibilityNodes && doMoveUp.call(me , visibilityNodes.getNearestNode(selectedNode , 'up') , beforeMoveFn , isRealMove)) ;
    }

    return true ;
 }

 function doMoveUp(node , beforeMoveFn , isRealMove){

    let me = this,
    {
       selectedNode
    } = me ;
 
    if(node && beforeMoveFn(data(getParentNode(node)) , data(selectedNode) , data(node))){

        if(isRealMove){

            insertBefore(selectedNode , node) ;
 
        }
        
       return true ;
    }
 
    return false ;
  }