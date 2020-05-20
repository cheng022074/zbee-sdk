
/**
 * 
 * 获取节点右下角坐标
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
        width,
        height
    } = node; 

    return {
        x:x + width,
        y:y + height
    } ;
 }

 return {
     x,
     y
 } ;