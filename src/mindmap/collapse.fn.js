
/**
 * 
 * 收起节点
 * 
 * @import get from .node.get scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import collapse from .node.collapse scoped
 * 
 * @param {string} id 节点编号
 * 
 */

let node = get(id) ;

if(node && collapse(node)){

    this.layout() ;

    return true ;
}

return false ;