
/**
 * 
 * 获得指定节点的所有关联
 * 
 * @import getDescendantNodes from .relation.descendant
 * 
 * @import getAncestorNodes from .relation.ancestor scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {array} 关联节点集合 
 * 
 */


let {
    relationNodes
} = node ;

if(relationNodes){

    return relationNodes ;
}

let {
    hidden
} = node;

relationNodes = node.relationNodes = [] ;

if(!hidden){

    relationNodes.push(node , ...getDescendantNodes(node) , ...getAncestorNodes(node)) ;


}

return relationNodes ;