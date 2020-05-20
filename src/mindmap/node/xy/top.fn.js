
/**
 * 
 * 获得节点的顶部坐标
 * 
 * @import isSized from ..sized
 * 
 * @param {data.Record} node 节点
 * 
 * @return {object} 坐标 
 * 
 */

let {
    hidden
 } = node ;

 if(isSized(node)){

    let {
        x,
        y,
        width
    } = node; 

    return {
        x:x + width / 2,
        y
    } ;
 }