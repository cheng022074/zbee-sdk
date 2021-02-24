
/**
 * 
 * 展开节点
 * 
 * @import show from .show scoped
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 如果正确展开则返回 true , 否则返回 false
 * 
 */

node = from(node) ;

if(node){

    let {
        expanded,
        children
    } = node;

    if(!expanded){

        node.expanded = true ;

        if(children.length){

            let {
                children
            } = node ;

            for(let childNode of children){

                show(childNode) ;
            }

            return true ;
        }

    }
}

return false ;