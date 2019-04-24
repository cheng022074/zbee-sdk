
/**
 * 
 * 返回下一个兄弟节点
 * 
 * @return {data.node.Relationship} 节点关系对象
 * 
 */

 let {
    node,
    parentNodeField,
    childNodesField,
    relationshipField
 } = this,
 parentNode = node[parentNodeField];

if(parentNode){

    let childNodes = parentNode[childNodesField],
        nextNode = childNodes[childNodes.indexOf(node) + 1];

    if(nextNode){

        return nextNode[relationshipField] ;
    }
}