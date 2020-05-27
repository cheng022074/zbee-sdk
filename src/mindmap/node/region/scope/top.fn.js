
/**
 * 
 * 获得区域的顶部距离
 * 
 * @import getNodes from ......nodes.child.last
 * 
 * @import getTopXY from ....xy.top scoped
 * 
 * @import getNode from ....leaf.first
 * 
 * @param {data.Record} node 节点
 * 
 * @return {number} 距离
 * 
 */

let y = Infinity,
    nodes = getNodes(node);

for(let node of nodes){

    let {
        y:nodeY
    } = getTopXY(node) ;

    if(y > nodeY){

        y = nodeY ;
    }
}

if(y === Infinity){

    y = getTopXY(getNode(node)).y ;
}

return y ;