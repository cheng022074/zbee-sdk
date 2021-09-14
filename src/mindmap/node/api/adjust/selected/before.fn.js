/**
 * 
 * 重置节点之前
 * 
 * @import getAncestorNodes from mindmap.nodes.ancestor scoped
 * 
 * @import getNextSiblingNodes from mindmap.nodes.sibling.next scoped
 * 
 * @import getPreviousSiblingNodes from mindmap.nodes.sibling.previous scoped
 * 
 * @return {object} 若干有关于目前选定节点的信息
 * 
 */

let {
    selectedNode:node
} = me ;

return {
    node,
    ancestorNodes:getAncestorNodes(node),
    nextSiblingNodes:getNextSiblingNodes(node),
    previousSiblingNodes:getPreviousSiblingNodes(node)
} ;

