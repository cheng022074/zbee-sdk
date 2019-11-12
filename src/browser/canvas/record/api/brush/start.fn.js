
/**
 * 
 * 画笔开始
 * 
 * @import assign from object.assign
 * 
 * @import scale from browser.scale value
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {number} config.x 画笔开始横坐标
 * 
 * @param {number} config.y 画笔开始纵坐标
 * 
 * @param {object} [...config.styles] 画线样式
 * 
 */

 let {
    context
 } = this ;

context.beginPath();

assign(context , styles) ;

context.moveTo(x * scale , y * scale);