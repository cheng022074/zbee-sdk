/**
 * 
 * 选中节点向下移动
 * 
 * @import next from ....sibling.next scoped
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @import data from mindmap.node.data scoped
 * 
 * @param {object} [callbacks = {}] 回调信息
 * 
 * @param {function} [callbacks.onBeforeNodeInsertBefore = () => true] 拖曳的拦截函数 
 * 
 * @param {function} [callbacks.onBeforeNodeInsertAfter = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

let me = this,
{
  selectedNode,
  layoutPositioner
} = me,
node = next(selectedNode) ;

if(node){

  return onBeforeNodeInsertAfter(data(getParentNode(node)) , data(selectedNode) , data(node));
}

node = layoutPositioner.getMoveDownNode(selectedNode) ;

if(node){

  return onBeforeNodeInsertBefore(data(getParentNode(node)) , data(selectedNode) , data(node)) ;
}

return false ;