
/**
 * 
 * 橡皮擦移动
 * 
 * @import arc from canvas.draw.line.arc
 * 
 * @import clear from canvas.clear
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {number} config.x 画线横坐标
 * 
 * @param {number} config.y 画线纵坐标
 * 
 * @param {number} config.size 橡皮擦大小
 * 
 */

 context.save() ;

 arc(context , {
     x,
     y,
     r:size / 2,
     end:270,
     clip:true
 }) ;

 clear(context) ;

 context.restore() ;