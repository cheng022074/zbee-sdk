
/**
 * 
 * 同步添加子节点
 * 
 * @import append from ..api.append scoped
 * 
 * @import from from ..from scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 * @return {boolean} 如果同步添加子节点成功则返回 true , 否则返回 false
 * 
 */

let appendedNode = from(node),
    isLayout = false;

parentNode = from(parentNode) ;

if(
    appendedNode &&
    (
        !appendedNode.hidden ||
        !getParentNode(appendedNode).hidden
    )){

    isLayout = true ;
}

if(parentNode){

    if(!parentNode.hidden){

        isLayout = true ;
    }

    node = append(node , parentNode) ;

    if(node && !node.hidden){

        isLayout = true ;
    }
}

return isLayout ;