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
 * @param {function} [onBeforeNodeInsertBefore = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */
let me = this,
{
   selectedNode
} = me,
node = previous(selectedNode);

if(node){

   return onBeforeNodeInsertBefore(data(getParentNode(node)) , data(selectedNode) , data(node)) ;
}

return false ;