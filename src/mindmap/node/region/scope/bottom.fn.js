
/**
 * 
 * 获得区域的顶部距离
 * 
 * @import getNode from ....leaf.last
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
} = getBottom(getNode(node)) ;

return y ;