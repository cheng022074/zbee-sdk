
/**
 * 
 * 获取一组下兄弟节点
 * 
 * @import previous from ....node.sibling.previous scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {array} 脑图节点列表
 * 
 */

let prevNode,
    result = [];

while(prevNode = previous(node)){

    result.push(prevNode) ;

    node = prevNode ;
}

return result ;