
/**
 * 
 * 获取第一个子节点
 * 
 * @import isLeaf from ..is.leaf scoped
 * 
 * @param {data.Record} node 节点
 * 
 */

 let {
    placeholderNode
 } = this,
 {
    hidden
 } = node ;

 if(!hidden){

    let {
        expanded
    } = node ;

    if(expanded && !isLeaf(node)){

        let {
            children
        } = node ;

        for(let childNode of children){

            if(childNode !== placeholderNode){

                return childNode;
            }
        }
    }
 }