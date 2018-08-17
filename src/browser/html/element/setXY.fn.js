
/**
 * 
 * 设置元素坐标
 * 
 * @import translatePoints from browser.html.element.translatePoints
 * 
 * @import position from browser.html.element.position
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @param {number} x 横坐标
 * 
 * @param {number} y 纵坐标
 * 
 */

let 
{
    top,
    left
} = translatePoints(el , x , y),
{
    style
} = el,
pos;

position(el) ;

style.top = `${top}px` ;

style.left = `${left}px` ;