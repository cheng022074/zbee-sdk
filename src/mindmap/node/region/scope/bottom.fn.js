
/**
 * 
 * 获得区域的顶部距离
 * 
 * @import getNodes from ......nodes.child.last
 * 
 *  @import getNode from ....leaf.last
 * 
 * @import getBottom from ....xy.bottom scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {number} 距离
 * 
 */

let {
    y
} =  getBottom(getNode(node)),
nodes = getNodes(node);

for(let childNode of nodes){

    let {
        y:nodeY
    } = getBottom(childNode) ;

    if(y < nodeY){

        y = nodeY ;
    }
}

return y ;