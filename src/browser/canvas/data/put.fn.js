
/**
 * 
 * 函数实现说明
 * 
 * @import is.number
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 绘制配置
 * 
 * @param {ImageData} config.data 截图横坐标
 * 
 * @param {number} [config.x = 0] 截图纵坐标
 * 
 * @param {number} [config.y = 0] 截图纵坐标
 * 
 * @param {number} [config.width] 截图横坐标
 * 
 * @param {number} [config.height] 截图纵坐标
 * 
 */

let {
    canvas
 } = context ;

 context.putImageData(data , x , y) ;