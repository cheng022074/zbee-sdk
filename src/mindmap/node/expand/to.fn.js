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

if(node){

    let {
        hidden
    } = node ;

    if(hidden){

        let parentNode,
            parentNodes = [];

        while(parentNode = getParentNode(node)){

            parentNodes.unshift(parentNode) ;

            if(!parentNode.hidden){

                break ;
            }

            node = parentNode ;
        }

        for(let parentNode of parentNodes){

            expand(parentNode) ;
        }

        if(node.hidden){

            return false ;
        }

        return true ;
    }
}

return false ;