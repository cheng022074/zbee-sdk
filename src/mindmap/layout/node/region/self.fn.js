
/**
 * 
 * 获得脑图节点自身范围
 * 
 * @import getLeftSpacing from ..spacing.left scoped
 * 
 * @import getRightSpacing from ..spacing.right scoped
 * 
 * @import getTopSpacing from ..spacing.top scoped
 * 
 * @import getBottomSpacing from ..spacing.bottom scoped
 * 
 * @import isObject from is.object.simple
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {object} [size] 指定的脑图节点大小
 * 
 * @return {object} 范围信息 
 * 
 */

 let {
    x,
    y,
    width,
    height
 } = node ;

 if(isObject(size)){

    width = size.width || width ;

    height = size.height || height ;
 }


 let top = y - getTopSpacing(node),
 left = x - getLeftSpacing(node);

 return {
     top,
     bottom:y + height + getBottomSpacing(node),
     left,
     right:x + width + getRightSpacing(node)
 } ;


