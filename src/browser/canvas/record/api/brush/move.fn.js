
/**
 * 
 * 画笔移动
 * 
 * @import assign from object.assign
 * 
 * @import scale from browser.scale value
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {number} config.x 画线横坐标
 * 
 * @param {number} config.y 画线纵坐标
 * 
 * @param {object} [...config.styles] 画线样式
 * 
 */

 let {
    context
 } = this ;

assign(context , styles) ;

context.lineTo(x * scale , y * scale);

context.stroke();