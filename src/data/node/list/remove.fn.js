
/**
 * 
 * 删除节点列表
 * 
 * @import remove from array.remove
 * 
 * @param {mixed} parentNode 父节点
 * 
 * @param {data.node.List} list 节点列表
 * 
 * @return {boolean} 添加成功后则返回 true , 否则返回 false
 * 
 */

let me = this ;

let {
    nodes,
    nodeMap
} = this;

if(nodes.includes(parentNode)){

    let {
        startNode,
        endNode
    } = list ;

    if(remove(nodeMap.get(parentNode) , startNode)){

        let startIndex = nodes.indexOf(startNode),
            endIndex = nodes.indexOf(endNode) ;

        if(endIndex !== -1){

            for(let i = startIndex ; i <= endIndex ; i++){

                nodeMap.delete(nodes[i]) ;
            }

            nodes.splice(startIndex , endIndex - startIndex + 1) ;

            return true ;
        }
    }
}

return false ;