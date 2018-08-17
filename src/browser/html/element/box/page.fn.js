/**
 * 
 * 获取元素的领域
 * 
 * @import getXY from browser.html.element.getXY
 * 
 * @import getSize from browser.html.element.getSize
 * 
 * @param {HTMLElement} el
 * 
 * @return {object} 高度与宽度的配置
 * 
 */

let {
    x,
    y
} = getXY(el),
{
    width,
    height
} = getSize(el);


return {
    width,
    height,
    left:x,
    top:y,
    right:x + width,
    bottom:y + height
} ;