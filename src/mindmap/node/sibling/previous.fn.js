
/**
 * 
 * 返回节点的上兄弟节点
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {data.Record} node 
 * 
 * @return {data.Record} 上兄弟节点 
 * 
 */

let parentNode = getParentNode(node) ;

if(parentNode){

    let {
        children
    } = parentNode;

    return children[children.indexOf(node) - 1] ;
}