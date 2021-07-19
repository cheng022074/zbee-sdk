
/**
 * 
 * 删除节点同步
 * 
 * @import remove from ..api.delete scoped
 * 
 * @import from from ..from scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 如果同步删除节点成功则返回 true , 否则返回 false
 */

let deletedNode = from(node),
    hidden = true;

if(deletedNode){

    hidden = deletedNode.hidden ;

    return remove(node) && !hidden;
}

return false ;

