
/**
 * 
 * 绘制文本
 * 
 * @import assign from object.assign
 * 
 * @import scale from browser.scale value
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} config = {} 绘制配置
 * 
 * @param {string} config.text 绘制文本 
 * 
 * @param {number} config.x 画线横坐标
 * 
 * @param {number} config.y 画线纵坐标
 * 
 * @param {object} [...config.styles] 文本样式
 * 
 */

assign(context , styles) ;

context.fillText(text , x * scale , y * scale) ;