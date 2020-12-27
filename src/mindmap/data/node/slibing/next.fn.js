
/**
 * 
 * 获得脑图节点下兄弟节点
 * 
 * @import from from ..from scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {data.Record} 兄弟脑图节点 
 * 
 */

 let parentNode = getParentNode(node) ;

 if(parentNode){

    node = from(node) ;

    let {
        children
    } = parentNode ;

    return children[children.indexOf(node) + 1] ;
 }
