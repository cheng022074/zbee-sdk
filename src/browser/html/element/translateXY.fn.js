
/**
 * 
 * 转换元素坐标值
 * 
 * @import getStyle from browser.html.element.getStyle
 * 
 * @import getXY from browser.html.element.getXY
 * 
 * @import is.number
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

let 
{
    position,
    left,
    top
} = getStyle(el , [
        'position',
        'top',
        'left'
    ]),
isRelative = position === 'relative',
{
    x:orignX,
    y:orginY
} = getXY(el);

left = parseFloat(left) ;

top = parseFloat(top) ;
 
if(isNaN(left)){
    
    left = isRelative ? 0 : el.offsetLeft;
}

if(isNaN(top)){

    top = isRelative ? 0 : el.offsetTop;
}

return {
    x: x - orignX + left,
    y: y - orginY + top
};