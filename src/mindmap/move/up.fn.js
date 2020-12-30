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
 * @return {boolean} 判断是否可以向下移动
 * 
 */

 function main(isRealMove){

    let me = this,
    {
        selectedNode
    } = me ;

    if(isRealMove){

        if(!doMoveUp.call(me , previous(selectedNode))){

            let {
               visibilityNodes
            } = me ;
      
            return doMoveUp.call(me , visibilityNodes.getNearestNode(selectedNode , 'up')) ;
         }

    }else if(!previous(selectedNode)){

        return !! visibilityNodes.getNearestNode(selectedNode , 'up') ;
    }
 }

 function doMoveUp(node){

    let me = this,
    {
       selectedNode
    } = me ;
 
    if(node){
 
        insertBefore(selectedNode , node) ;

        selectedNode.selected = true ;
    
        me.fireEvent('nodeinsertbefore' , data(selectedNode) , data(node) , false) ;
    
        order(getParentNode(node)) ;
    
        me.layout() ;
 
       return true ;
    }
 
    return false ;
  }