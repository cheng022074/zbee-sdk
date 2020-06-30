
/**
 * 
 * 获取所有子孙节点
 * 
 * @import getDescendantNodes from .descendant
 * 
 * @param {data.Reocrd} node 节点
 * 
 * @param {boolean} [isVisible = true] 是否只获取可见的节点
 * 
 * @return {array} 节点集合
 * 
 */

let {
    descendantNodes
} = node ;

if(descendantNodes){

    return descendantNodes ;
}

let {
    expanded,
    children
} = node;

descendantNodes = node.descendantNodes = [] ;

if(expanded || !isVisible){

    for(let childNode of children){

        descendantNodes.push(childNode , ...getDescendantNodes(childNode , isVisible)) ;
    }

}

return descendantNodes ;