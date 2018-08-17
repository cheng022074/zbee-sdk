
/**
 * 
 * 返回 pointerdown 的兼容性名称
 * 
 * @import isTouch from browser.support.touch
 * 
 * @return {string} pointerdown 兼容事件名称 
 * 
 * @once
 * 
 */

return isTouch() ? 'touchstart' : 'pointerdown' ;
