
/**
 * 
 * 橡皮擦移动
 * 
 * @import arc from browser.canvas.draw.line.arc
 * 
 * @import clear from browser.canvas.clear
 * 
 * @param {object} [config = {}] 擦除配置
 * 
 * @param {number} config.x 擦除横坐标
 * 
 * @param {number} config.y 擦除纵坐标
 * 
 * @param {number} config.size 橡皮擦大小
 * 
 */

 let {
    context
 } = this ;

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