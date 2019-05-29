
/**
 * 
 * 获得当前节点区域对象
 * 
 * @import createRegion from math.region
 * 
 * @return {math.Region} 节点区域 
 * 
 */

 let {
    x,
    y,
    width,
    height
 } = this ;

 return createRegion({
     x,
     y,
     width,
     height
 }) ;