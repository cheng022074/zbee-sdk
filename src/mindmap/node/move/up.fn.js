/**
 * 
 * 选中节点向上移动
 * 
 * @import from from ..from scoped
 * 
 * @import previous from ..sibling.previous scoped
 * 
 * @import insertBefore from mindmap.node.insert.before scoped
 * 
 * @import insertAfter from mindmap.node.insert.after scoped
 * 
 * @import data from mindmap.node.data scoped
 * 
 * @param {mixed} [baseNode] 参照节点
 * 
 * @return {boolean} 移动状态
 * 
 */

let me = this ;

baseNode = from(baseNode) ; 

let node = previous(baseNode);

if(node){

    return insertBefore(baseNode , node) ;
}

return false ;