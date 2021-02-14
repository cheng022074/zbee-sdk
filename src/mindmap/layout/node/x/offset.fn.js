
/**
 * 
 * 设置节点的相对横坐标
 * 
 * @import getDescendantNodes from ..nodes.descendant scoped
 * 
 * @import setX from .offset scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {number} offsetX 节点横坐标
 * 
 * @param {boolean} [recursive = true] 是否递归设置横坐标
 * 
 */

let {
   x:oldValue = 0
} = node;

node.x = oldValue + offsetX ;

if(recursive){

   let descendantNodes = getDescendantNodes(node) ;

   for(let descendantNode of descendantNodes){

    setX(descendantNode , offsetX , false) ;
   
   }
}