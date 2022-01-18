
/**
 * 
 * 收起节点
 * 
 * @import hide from .hide scoped
 * 
 * @import select from .select scoped
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {boolean} 如果收起动作执行则返回 true , 否则返回 false
 * 
 */

 node = from(node) ;

let {
    expanded
} = node;

if(expanded){

    let {
        children
    } = node ;

    if(children.length){

        let {
            selectedNode
        } = this;
    
        for(let childNode of children){
    
            hide(childNode) ;
        }
    
        if(selectedNode && selectedNode.hidden){
    
            select(node) ;
        }
    }

    node.expanded = false ;
    
    return true ;
}

return false ;