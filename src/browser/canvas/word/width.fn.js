
/**
 * 
 * 获得文本的宽度
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {string} text 文本
 * 
 */

let {
    width
} = context.measureText(text) ;

return width ;