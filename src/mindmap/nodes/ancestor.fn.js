/**
 * 
 * 获取所有祖先节点
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {array}
 * 
 */

let nodes = [],
    parentNode;

while(parentNode = getParentNode(node)){

    nodes.push(parentNode) ;

    node = parentNode ;
}

return nodes ;

