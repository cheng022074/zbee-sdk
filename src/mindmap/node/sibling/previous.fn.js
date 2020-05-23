
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

        if(index !== 0){

            return children[index - 1] ;
        }
    }
 }