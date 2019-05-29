
/**
 * 
 * 获得指定深度的节点集合
 * 
 * @param {number} depth 深度
 * 
 * @return {array} 节点集合 
 * 
 */

let nodes = [],
{
    childNodes
} = this;

if(depth === 1){

    return childNodes ;
}

depth -- ;

for(let childNode of childNodes){

    nodes.push(...childNode.getDepthNodes(depth)) ;
}

return nodes ;