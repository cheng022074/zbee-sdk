
/**
 * 
 * 设置节点的纵坐标
 * 
 * @import getTopSpacing from .spacing.top scoped
 * 
 * @import getChildNodes from ..nodes.child scoped
 * 
 * @import setOffsetY from .y.offset scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {number} y 节点纵坐标
 * 
 * @param {boolean} [recursive = true] 是否递归设置纵坐标
 * 
 */

let value = y + getTopSpacing(node),
{
   y:oldValue = 0
} = node;

node.y = value ;

let offsetValue = value - oldValue ;

if(recursive){

   let childNodes = getChildNodes(node) ;

   for(let childNode of childNodes){

       setOffsetY(childNode , offsetValue) ;
   }
}