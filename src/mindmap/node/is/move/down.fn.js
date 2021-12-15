/**
 * 
 * 选中节点向下移动
 * 
 * @import from from ....from scoped
 * 
 * @import next from ....sibling.next scoped
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @import data from mindmap.node.data scoped
 * 
 * @param {mixed} [baseNode] 参照节点
 * 
 * @param {function} [onBeforeNodeInsertAfter = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

let me = this ;

baseNode = from(baseNode) ;

let node = next(baseNode) ;

if(node){

  return onBeforeNodeInsertAfter(data(getParentNode(node)) , data(baseNode) , data(node));
}

return false ;