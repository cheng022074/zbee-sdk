
/**
 * 
 * 获得子孙节点
 * 
 * @import cache from mindmap.layout.cache scoped
 * 
 * @import getChildNodes from .child scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {array} 子孙节点数组 
 * 
 */

function main(node){

    return getDescendantNodes(node) ;
 }

 function getDescendantNodes({
     expanded,
     children
 }){

    let result = [] ;

    if(expanded){

        for(let childNode of children){

            result.push(childNode) ;

            result.push(...getDescendantNodes(childNode)) ;
        }

        return result ;
    }

    return result ;
 }