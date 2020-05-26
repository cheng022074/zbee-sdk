
/**
 * 
 * 获得指定节点的所有关联
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import getDescendantNodes from .relation.descendant
 * 
 * @param {data.Record} node 节点
 * 
 * @return {array} 关联节点集合 
 * 
 */

function main(node){

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
}

function getAncestorNodes(node){

    let parentNode,
        result = [];

    while(parentNode = getParentNode(node)){

        result.push(parentNode) ;

        node = parentNode ;
    }

    return result ;
}