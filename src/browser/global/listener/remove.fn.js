
/**
 * 
 * 去除监听全局事件
 * 
 * @import getEventName from browser.event.name
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * @return {mixed} 返回说明 
 * 
 */

document.removeEventListener(getEventName(event) , fn) ;