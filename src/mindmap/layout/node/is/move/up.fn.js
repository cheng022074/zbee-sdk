/**
 * 
 * 选中节点向上移动
 * 
 * @import previous from ....sibling.previous scoped
 * 
 * @import data from mindmap.node.data scoped
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @param {function} [onBeforeNodeInsertAfter = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

 function main(onBeforeNodeInsertAfter){

    let me = this,
    {
        selectedNode
    } = me ;

    return doMoveUp.call(me , previous(selectedNode) , onBeforeNodeInsertAfter) ;
 }

 function doMoveUp(node , onBeforeNodeInsertAfter){

   let {
      selectedNode,
      layoutPositioner
   } = this ;

   node = node || layoutPositioner.getMoveUpNode(selectedNode) ;
 
   return !!(node && onBeforeNodeInsertAfter(data(getParentNode(node)) , data(selectedNode) , data(node))) ;
}