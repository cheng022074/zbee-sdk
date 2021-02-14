
/**
 * 
 * 脑图节点的水平间距
 * 
 * @import is.function
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {string} direction 方向
 * 
 * @return {number} 间距值
 * 
 */

 let {
    horizontalSpacing
 } = this.layoutConfig ;

 if(isFunction(horizontalSpacing)){

    return horizontalSpacing(node , direction) ;
 }

 return horizontalSpacing ;