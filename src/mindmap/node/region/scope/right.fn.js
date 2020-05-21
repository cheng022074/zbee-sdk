
/**
 * 
 * 获得区域的右边距离
 * 
 * @import nodes from ......nodes.leaf
 * 
 *  @import getRightXY from ..xy.right scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {number} 距离
 * 
 */

 let leafNodes = nodes(node),
     maxRightX = 0;

for(let leafNode of leafNodes){

    let {
        x:rightX
    } = getRightXY(leafNode) ;

    if(maxRightX < rightX){

        maxRightX = rightX ;
    }
}

return maxRightX ;

 