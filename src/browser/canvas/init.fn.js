
/**
 * 
 * 初始化画板
 * 
 * @import browserScale from browser.scale value
 * 
 * @param {HTMLElement} canvas 画板元素
 * 
 * @param {number} [scale = 1] 外部传入缩放比例
 * 
 * 
 */

 let {
    clientWidth,
    clientHeight
 } = canvas ;

 scale *= browserScale ;

 canvas.width = clientWidth * scale;

 canvas.height = clientHeight * scale;

 canvas.getContext('2d').scale(scale , scale) ;