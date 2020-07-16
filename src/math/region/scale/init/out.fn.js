
/**
 * 
 * @import width from ....width
 * 
 * @import height from ....height
 * 
 * @param {object} container 容器范围
 * 
 * @param {object} target 目标范围
 * 
 */

const targetWidth = width(target), 
    targetHeight = height(target),
    deltaWidth = width(container) - targetWidth,
    deltaHeight = height(container) - targetHeight;

if(deltaWidth >= 0 && deltaHeight >= 0){

    return 1 ;
}

if(deltaWidth < deltaHeight){

    return 1 + deltaWidth / targetWidth ;
}

return 1 + deltaHeight / targetHeight ;





 

 