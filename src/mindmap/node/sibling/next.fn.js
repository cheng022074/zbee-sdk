
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

 let {
    hidden
 } = node ;

 if(!hidden){

    let parentNode = getParentNode(node) ;

    if(parentNode){

        let {
            children
        } = parentNode,
        index = children.indexOf(node);

        if(index !== children.length - 1){

            return children[index + 1] ;
        }
    }
 }