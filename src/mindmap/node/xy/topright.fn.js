
/**
 * 
 * 获取节点右上角坐标
 * 
 * @import isSized from ..sized scoped
 * 
 * @param {data.Record} node 脑图节点
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
        x:x + width,
        y
    } ;
 }

 return {
     x,
     y
 } ;