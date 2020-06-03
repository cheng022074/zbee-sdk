
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
 * @param {string} id 节点编号
 * 
 */

let node = query(id),
{
    hidden
} = node,
deleteNodes = remove(node) ;

if(!hidden && deleteNodes !== false){

    layout() ;
}

this.fireEvent('nodedelete' , deleteNodes) ;