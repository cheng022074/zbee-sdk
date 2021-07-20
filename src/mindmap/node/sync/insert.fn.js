
/**
 * 
 * 插入节点
 * 
 * @import insert from ..api.insert scoped
 * 
 * @import from from ..from scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {mixed} node 需要插入的节点
 * 
 * @param {mixed} baseNode 参照节点
 * 
 * @param {string} region 插入偏移位置
 * 
 * @return {boolean} 如果插入节点成功则返回 true , 否则返回 false
 * 
 */

let insertedNode = from(node),
    isLayout = false;

baseNode = from(baseNode) ;

if(
    insertedNode &&
    (
        !insertedNode.hidden ||
        !getParentNode(insertedNode).hidden
    )
){

    isLayout = true ;
}

if(baseNode){

    node = insert(node , baseNode , region) ;

    if(node && !node.hidden){

        isLayout = true ;
    }
}

return isLayout ;
