
/**
 * 
 * 收起
 * 
 * @import get from tree.node.get scoped
 * 
 * @import layout from ..layout scoped
 * 
 * @param {string} id 节点编号
 * 
 */

let node = get(id) ;

if(node){

    node.view.collapse() ;

    layout() ;
}

return false ;
