
/**
 * 
 * 返回 pointerup 的兼容性名称
 * 
 * @import isTouch from browser.support.touch
 * 
 * @return {string} pointerup 兼容事件名称 
 * 
 * @once
 * 
 */

return isTouch() ? 'touchend' : 'pointerup' ;