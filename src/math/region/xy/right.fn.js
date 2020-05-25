
/**
 * 
 * 计算右边坐标
 * 
 * @import getTop from ..top
 * 
 * @import getBottom from ..bottom
 * 
 * @import getLeft from ..left
 * 
 * @import getRight from ..right
 * 
 * @param {object} config 配置
 * 
 * @return {object} 坐标 
 * 
 */

return {
    x:getLeft(config) + getRight(config) - getLeft(config),
    y:getTop(config) + (getBottom(config) - getTop(config)) / 2
} ;
