/**
 * 
 * 选中节点向下移动
 * 
 * @import from from ..from scoped
 * 
 * @import next from ..sibling.next scoped
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

let node = next(baseNode);

if(node){

    return insertAfter(baseNode , node) ;
}

return false ;