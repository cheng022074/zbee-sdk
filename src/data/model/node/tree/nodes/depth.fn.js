
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
    children
} = this;

if(depth === 1){

    return children ;
}

depth -- ;

for(let childNode of children){

    nodes.push(...childNode.getDepthNodes(depth)) ;
}

return nodes ;