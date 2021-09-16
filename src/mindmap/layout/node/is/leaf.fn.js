/**
 * 
 * 判断节点是否为叶子节点
 * 
 * @import getChildNodes from mindmap.nodes.child scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {boolean} 如果为叶子节点则返回 true , 否则返回 false 
 * 
 */

let {
    loaded
} = node ;

if(!loaded){

    return false ;
}

return !getChildNodes(node).find(({
    visibility
}) => visibility);
