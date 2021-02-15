
/**
 * 
 * 设置节点的相对纵坐标
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 * @import setY from .offset scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {number} offsetY 节点纵坐标
 * 
 * @param {boolean} [recursive = true] 是否递归设置横坐标
 * 
 */

let {
    y:oldValue
 } = node;
 
 node.y = oldValue + offsetY ;
 
 if(recursive){
 
    let descendantNodes = getDescendantNodes(node) ;
 
    for(let descendantNode of descendantNodes){
 
     setY(descendantNode , offsetY , false) ;
    
    }
 }