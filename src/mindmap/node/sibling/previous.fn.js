
/**
 * 
 * 返回节点的上兄弟节点
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import get from ..get scoped
 * 
 * @import is.string
 * 
 * @import data from ..data scoped
 * 
 * @param {data.Record} node 
 * 
 * @return {data.Record} 上兄弟节点 
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

        if(index !== 0){

            let result = children[index - 1] ;

            if(isData){

                return data(result) ;
            }

            return result ;
        }
    }
 }