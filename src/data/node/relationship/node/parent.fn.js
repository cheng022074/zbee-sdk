
/**
 * 
 * 返回父节点
 * 
 * @return {data.node.Relationship} 节点关系对象
 * 
 */

 let {
    node,
    parentNodeField,
    relationshipField
 } = this,
 parentNode = node[parentNodeField];

 if(parentNode){

    return parentNode[relationshipField] ;
 }