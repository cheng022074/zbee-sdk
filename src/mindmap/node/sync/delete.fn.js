
/**
 * 
 * 删除节点同步
 * 
 * @import remove from ..api.delete scoped
 * 
 * @import from from ..from scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 如果同步删除节点成功则返回 true , 否则返回 false
 * 
 */

let deletedNode = from(node),
    isLayout = false;

if(deletedNode){

    if(!getParentNode(deletedNode).hidden){

        isLayout = true ;
    }

    remove(node) ;
}

return isLayout ;

