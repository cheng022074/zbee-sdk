/**
 * 
 * 选中节点向上移动
 * 
 * @import from from ....from scoped
 * 
 * @import previous from ....sibling.previous scoped
 * 
 * @import data from mindmap.node.data scoped
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @param {mixed} [baseNode] 参照节点
 * 
 * @param {function} [onBeforeNodeInsertBefore = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */
let me = this ;

baseNode = from(baseNode) ;

let node = previous(baseNode);

if(node){

   return onBeforeNodeInsertBefore(data(getParentNode(node)) , data(baseNode) , data(node)) ;
}

return false ;