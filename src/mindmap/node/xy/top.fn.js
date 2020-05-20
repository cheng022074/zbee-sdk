
/**
 * 
 * 获得节点的顶部坐标
 * 
 * @import isSized from ..sized scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {object} 坐标 
 * 
 */

let {
    x,
    y,
    hidden
 } = node ;

 if(isSized(node)){

    let {
        width
    } = node; 

    return {
        x:x + width / 2,
        y
    } ;
 }

 return {
     x,
     y
 } ;