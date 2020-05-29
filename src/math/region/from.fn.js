
/**
 * 
 * 将数据转换成区域类型的对象
 * 
 * @import is.defined
 * 
 * @param {object} data 数据
 * 
 * @return {object} 区域类型的数据 
 * 
 */

 let {
    x,
    y,
    width,
    height,
    top,
    left,
    bottom,
    right
 } = data,
 {
     length
 } = Object.keys(data);

 if(isDefined(x) && isDefined(y) && isDefined(width) && isDefined(height)){

    return {
        top:y,
        left:x,
        right:x + width,
        bottom:y + height
    } ;

 }else if(isDefined(x) && isDefined(y) && length === 2){

    return {
        top:y,
        right:x,
        left:x,
        bottom:y
    } ;

 }

 return {
    top,
    right,
    bottom,
    left
} ;

