
/**
 * 
 * 获取所有子孙节点
 * 
 * @import getDescendantNodes from .descendant
 * 
 * @param {data.Reocrd} node 节点
 * 
 * @return {array} 节点集合
 * 
 */

let {
    expanded,
    children
} = node,
result = [];

if(expanded){

    for(let childNode of children){

        result.push(childNode , ...getDescendantNodes(childNode)) ;
    }

}

return result ;