
/**
 * 
 * 绘制文字中
 * 
 * @import draw from browser.canvas.draw.word
 * 
 * @param {object} [config] 文字配置
 * 
 */

let me = this,
{
    context
} = me ;

me.redrawData() ;

draw(context , config) ;