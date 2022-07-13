
/**
 * 
 * 关闭所有节点选择模式
 * 
 * @import getDescendantNodes from mindmap.nodes.descendant scoped
 * 
 * @import getRootNode from mindmap.node.root scoped
 * 
 * @param {mixed} node 节点
 * 
 */  

 let rootNode = getRootNode() ;

return [
    rootNode,
    ...getDescendantNodes(rootNode)
]
.filter(({
    checked
}) => checked);