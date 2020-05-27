
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

let startY = y ;

for(let childNode of nodes){

    let {
        y:nodeY
    } = getBottom(childNode) ;

    if(node.id === '12123'){

        console.log(childNode.id , nodeY)
    }

    if(y < nodeY){

        y = nodeY ;
    }
}

if(node.id === '12123')

console.log(startY , y) ;

return y ;