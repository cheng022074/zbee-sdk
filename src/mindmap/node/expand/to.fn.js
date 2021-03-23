/**
 * 
 * 展开到指定节点
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import from from ..from scoped
 * 
 * @import expand from ..expand scoped
 * 
 * @param {mixed} node 节点
 * 
 */

node = from(node) ;

let {
    hidden
} = node ;

if(hidden){

    let parentNode,
        parentNodes = [];

    while(parentNode = getParentNode(node)){

        if(!parentNode.hidden){

            break ;
        }

        parentNodes.unshift(parentNode) ;

        node = parentNode ;
    }

    for(let parentNode of parentNodes){

        expand(parentNode) ;
    }

    return true ;
}

return false ;