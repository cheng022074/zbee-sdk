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
 * @param {function} [onBeforeNodeInsertAfter = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

let me = this,
{
  selectedNode
} = me,
node = next(selectedNode) ;

if(node){

  return onBeforeNodeInsertAfter(data(getParentNode(node)) , data(selectedNode) , data(node));
}

return false ;