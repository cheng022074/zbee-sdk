
/**
 * 
 * 返回节点的下兄弟节点
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import get from ....get scoped
 * 
 * @import data from ....data scoped
 * 
 * @import is.string
 * 
 * @param {mixed} node 
 * 
 * @return {data.Record} 下兄弟节点 
 * 
 */

 let isData = false ;

 if(isString(node)){

    node = get(node) ;

    isData = true ;
 }

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

            let result = children[index + 1] ;

            if(isData){

                return data(result) ;
            }

            return result ;
        }
    }
 }