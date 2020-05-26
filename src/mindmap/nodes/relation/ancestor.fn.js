
/**
 * 
 * 获取所有祖先节点
 * 
 * @import getParentNode from ....node.parent scoped
 * 
 * @param {data.Recorder} node 节点
 * 
 * @return {array} 祖先节点集合
 * 
 */

let parentNode,
result = [];

while(parentNode = getParentNode(node)){

    result.push(parentNode) ;

    node = parentNode ;
}

return result ;