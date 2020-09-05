
/**
 * 
 * 展开节点
 * 
 * @import get from .node.get scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @param {string} id 节点编号
 * 
 */

let node = get(id) ;

if(node && expand(node)){

    this.layout() ;

    return true ;

}

return false ;