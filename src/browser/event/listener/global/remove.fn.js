
/**
 * 
 * 去除监听全局事件
 * 
 * @import getListeners from ..browser.event.listeners
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * @param {string} selector 选择器
 * 
 * @return {mixed} 返回说明 
 * 
 */

let listeners = getListeners(),
listenerFn = listeners.get(event , fn , selector);

if(listenerFn){

    window.removeEventListener(event , listenerFn) ;
}