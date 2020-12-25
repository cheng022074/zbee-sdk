
/**
 * 
 * 绘制弧线
 * 
 * @import assign from object.assign
 * 
 * @import degree2radian from math.degree2radian
 * 
 * @import doBegin from browser.canvas.begin
 * 
 * @import doEnd from browser.canvas.end
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {number} config.x 圆中心点横坐标
 * 
 * @param {number} config.y 圆中心点纵坐标
 * 
 * @param {number} config.r 圆的半径
 * 
 * @param {number} [config.start = -90] 圆起始角度
 * 
 * @param {number} config.end 圆终止角度
 * 
 * @param {number} [config.counterclockwise = false] 如果为 false 则为顺时针，反之为逆时针
 * 
 * @param {boolean} [config.independent = true] 是否为独立图形
 * 
 * @param {boolean} [config.clip = false] 是否为剪切路径
 * 
 * @param {object} [...config.styles] 画线样式
 * 
 */

doBegin(context , independent) ;

assign(context , styles) ;

context.arc(x * scale , y , r , degree2radian(start) , degree2radian(end) , counterclockwise) ;

doEnd(context , clip) ;