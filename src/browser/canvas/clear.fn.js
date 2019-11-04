
/**
 * 
 * 清空画板
 * 
 * @import is.number
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {number} [config.x = 0] 清空起始横坐标 
 * 
 * @param {number} [config.y = 0] 清空起始纵坐标
 * 
 * @param {number} config.width 清空宽度
 * 
 * @param {number} config.height 清空高度
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

 context.clearRect(x , y , width , height) ;