
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

 let y = - Infinity,
     nodes = getNodes(node);

for(let node of nodes){

    let {
        y:nodeY
    } = getBottom(node) ;

    if(y < nodeY){

        y = nodeY ;
    }
}

if(y === - Infinity){

    y = getBottom(getNode(node)).y ;
}

console.log(node.id , y , getBottom(getNode(node)).y) ;

return y ;