/**
 * 
 * 选中节点向上移动
 * 
 * @import previous from ..sibling.previous scoped
 * 
 * @import insertBefore from mindmap.node.insert.before scoped
 * 
 * @import insertAfter from mindmap.node.insert.after scoped
 * 
 * @import data from mindmap.node.data scoped
 * 
 * @return {boolean} 移动状态
 * 
 */

let me = this,
{
    selectedNode
} = me,
node = previous(selectedNode);

if(node){

    return insertBefore(selectedNode , node) ;
}

return false ;