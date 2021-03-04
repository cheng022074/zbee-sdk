/**
 * 
 * 注册节点
 * 
 * @import register from .register scoped
 * 
 * @param {data.Record} node 节点
 * 
 */

let {
    id,
    children
} = node,
{
    nodes
} = this;

nodes.set(id , node) ;

for(let childNode of children){

    register(childNode) ;

    childNode.parentNodeId = id ;
}

return node ;