
/**
 * 
 * 显示节点
 * 
 * @import isLeaf from .is.leaf scoped
 * 
 * @import show from .show scoped
 * 
 * @param {data.Record} node 节点
 * 
 */

node.hidden = false ;

let {
    expanded
} = node ;

if(expanded && !isLeaf(node)){

    let {
        children
    } = node ;

    for(let childNode of children){

        show(childNode) ;
    }
}