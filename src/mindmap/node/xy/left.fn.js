
/**
 * 
 * 获得节点的左边坐标
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
        height
    } = node; 

    return {
        x:x,
        y:y + height / 2
    } ;
 }

 return {
     x,
     y
 } ;