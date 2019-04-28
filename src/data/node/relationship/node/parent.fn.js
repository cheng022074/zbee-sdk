
/**
 * 
 * 返回父节点
 * 
 * @import fly from object.proxy.fly
 * 
 * @return {data.node.Relationship} 节点关系对象
 * 
 */

 let {
    proxy,
    parentNodeField,
    relationshipField
 } = this,
 parentNode = proxy.getIf(parentNodeField);

 if(parentNode){

    return fly(parentNode).get(relationshipField) ;
 }