
/**
 * 
 * 获得节点的右边坐标
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
        width,
        height
    } = node; 

    return {
        x:x + width,
        y:y + height / 2
    } ;
 }