
/**
 * 
 * 初始化画板
 * 
 * @import scale from browser.scale value
 * 
 * @param {HTMLElement} canvas 画板元素
 * 
 * 
 */

 let {
    clientWidth,
    clientHeight
 } = canvas ;

 canvas.width = clientWidth * scale ;

 canvas.height = clientHeight * scale ;

 