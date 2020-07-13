
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

 canvas.width = clientWidth * browserScale * scale;

 canvas.height = clientHeight * browserScale * scale;

 