
/**
 * 
 * 删除指定节点
 * 
 * @import remove from ..node.delete scoped
 * 
 * @import query from ..node.query scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import order from ..order scoped
 * 
 * @param {string} id 节点编号
 * 
 */

let node = query(id) ;

if(!node){

    return false;
}

let {
    hidden
} = node,
parentNode = getParentNode(node),
deleteNodes = remove(node),
me = this;

if(deleteNodes !== false){

    me.fireEvent('nodedelete' , deleteNodes) ;

    order(parentNode) ;

    if(!hidden){

        me.layout() ;
    }

    return true ;
}

return true ;