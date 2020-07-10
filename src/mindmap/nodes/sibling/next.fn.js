
/**
 * 
 * 获取一组下兄弟节点
 * 
 * @import next from ....node.sibling.next scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {array} 脑图节点列表
 * 
 */

 let nextNode,
     result = [];

while(nextNode = next(node)){

    result.push(nextNode) ;

    node = nextNode ;
}

return result ;