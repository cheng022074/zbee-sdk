
/**
 * 
 * 返回节点的下兄弟节点
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {data.Record} node 
 * 
 * @return {data.Record} 下兄弟节点 
 * 
 */

let parentNode = getParentNode(node) ;

if(parentNode){

    let {
        children
    } = parentNode;

    return children[children.indexOf(node) + 1] ;
}