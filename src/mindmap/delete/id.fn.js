
/**
 * 
 * 删除指定节点
 * 
 * @import remove from ..node.delete scoped
 * 
 * @import query from ..node.query scoped
 * 
 * @import layout from ..layout scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import order from ..order scoped
 * 
 * @param {string} id 节点编号
 * 
 */

 // 此处未考虑忽略节点时的情况

let node = query(id) ;

if(!node){

    return ;
}

let {
    hidden
} = node,
parentNode = getParentNode(node),
deleteNodes = remove(node) ;

if(!hidden && deleteNodes !== false){

    layout() ;
}

this.fireEvent('nodedelete' , deleteNodes) ;

order(parentNode) ;