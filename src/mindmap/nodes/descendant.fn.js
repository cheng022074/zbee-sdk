
/**
 * 
 * 获得子孙节点
 * 
 * @import from from ..node.from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {boolean} [isExpanded = true] 仅遍历展开的节点
 * 
 * @return {array} 子孙节点数组 
 * 
 */

function main(node , isExpanded){

    return getDescendantNodes(from(node) , isExpanded) ;
 }

 function getDescendantNodes({
     expanded,
     children
 } , isExpanded){

    let result = [] ;

    if(isExpanded && expanded || !isExpanded){

        for(let childNode of children){

            result.push(childNode) ;

            result.push(...getDescendantNodes(childNode , isExpanded)) ;
        }

        return result ;
    }

    return result ;
 }