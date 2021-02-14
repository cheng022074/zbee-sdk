
/**
 * 
 * 设置节点的横坐标
 * 
 * @import getHorizontalSpacing from .spacing.horizontal scoped
 * 
 * @import getChildNodes from ..nodes.child scoped
 * 
 * @import setOffsetX from .x.offset scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {number} x 节点横坐标
 * 
 * @param {boolean} [recursive = true] 是否递归设置横坐标
 * 
 */

 let value = x + getHorizontalSpacing(node , 'left'),
 {
    x:oldValue = 0
 } = node;

node.x = value ;

let offsetValue = value - oldValue ;

if(recursive){

    let childNodes = getChildNodes(node) ;

    for(let childNode of childNodes){

        setOffsetX(childNode , offsetValue) ;
    }
}