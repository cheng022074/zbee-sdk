
/**
 * 
 * 获得子孙节点
 * 
 * @import from from ..node.from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {array} 子孙节点数组 
 * 
 */

function main(node){

    return getDescendantNodes(from(node)) ;
}

 function getDescendantNodes({
     children
 }){

    let result = [] ;

    for(let childNode of children){

        result.push(childNode) ;

        result.push(...getDescendantNodes(childNode , isExpanded)) ;
    }

    return result ;
 }