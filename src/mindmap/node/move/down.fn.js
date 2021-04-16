/**
 * 
 * 选中节点向下移动
 * 
 * @import next from ..sibling.next scoped
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
node = next(selectedNode);

if(node){

    return insertAfter(selectedNode , node) ;
}

return false ;