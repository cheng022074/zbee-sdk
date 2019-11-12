
/**
 * 
 * 获取画布数据
 * 
 * @import is.number
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 绘制配置
 * 
 * @param {number} [config.x = 0] 截图横坐标
 * 
 * @param {number} [config.y = 0] 截图纵坐标
 * 
 * @param {number} [config.width] 截图横坐标
 * 
 * @param {number} [config.height] 截图纵坐标
 * 
 * 
 */

let {
    canvas
 } = context ;

 if(!isNumber(width)){

    width = canvas.width ;
 }

 if(!isNumber(height)){

    height = canvas.height ;
 }

 return context.getImageData(x , y , width , height) ;