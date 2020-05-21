
/**
 * 
 * 获得区域的顶部距离
 * 
 * @import getNode from ....leaf.first
 * 
 * @import getTopXY from ..xy.top scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {number} 距离
 * 
 */

let {
    y
} = getTopXY(getNode(node)) ;

return y ;