
/**
 * 
 * 收起节点
 * 
 * @import isLeaf from .is.leaf scoped
 * 
 * @import hide from .hide scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {boolean} 如果收起动作执行则返回 true , 否则返回 false
 * 
 */

let {
    expanded
} = node;

if(expanded && !isLeaf(node)){

    let {
        children
    } = node ;

    for(let childNode of children){

        hide(childNode) ;
    }

    node.expanded = false ;

    return true ;
}

return false ;