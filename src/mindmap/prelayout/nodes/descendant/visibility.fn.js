
/**
 * 
 * 获得子孙节点
 * 
 * @import from from mindmap.node.from scoped
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
     expanded,
     children
 }){

    let result = [] ;

    if(expanded){

        for(let childNode of children){

            if(childNode.visibility){

                result.push(childNode) ;

                result.push(...getDescendantNodes(childNode)) ;
            }
        }

        return result ;
    }

    return result ;
 }