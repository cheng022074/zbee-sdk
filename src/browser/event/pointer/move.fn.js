
/**
 * 
 * 返回 pointermove 的兼容性名称
 * 
 * @import isTouch from browser.support.touch
 * 
 * @return {string} pointermove 兼容事件名称 
 * 
 * @once
 * 
 */

return isTouch() ? 'touchmove' : 'pointermove' ;
