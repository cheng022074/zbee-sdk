
/**
 * 
 * 同步添加子节点
 * 
 * @import append from ..api.append scoped
 * 
 * @import from from ..from scoped
 * 
 * @import isLeafNode from ..is.leaf scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 * @return {boolean} 如果同步添加子节点成功则返回 true , 否则返回 false
 * 
 */

let appendedNode = from(node),
    hidden = true,
    isParentLeafNode = false;

if(appendedNode){

    hidden = appendedNode.hidden ;
}

parentNode = from(parentNode) ;

if(parentNode){

    isParentLeafNode = true ;
}

node = append(node , parentNode) ;

return node && (!hidden || !from(node).hidden || isParentLeafNode) ;