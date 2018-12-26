
/**
 * 
 * 转换元素坐标值
 * 
 * @import translateXY from browser.html.element.translateXY
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @param {number} x 横坐标
 * 
 * @param {number} y 纵坐标
 * 
 * @return {object} 转换后的坐标值 
 * 
 */

let {
    x:left,
    y:top
} = translateXY(el , x , y) ;

return {
    left,
    top
} ;