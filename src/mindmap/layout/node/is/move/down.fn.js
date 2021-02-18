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
 * @param {function} [onBeforeNodeInsertBefore = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

let me = this,
{
  selectedNode,
  layoutPositioner
} = me,
node = next(selectedNode) || layoutPositioner.getMoveDownNode(selectedNode) ;

return !! (node && onBeforeNodeInsertBefore(data(getParentNode(node)) , data(selectedNode) , data(node))) ;