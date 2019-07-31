
/**
 * 
 * 去除监听事件
 * 
 * @import getListeners from ..browser.event.listeners
 * 
 * @param {mixed} target
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * @return {mixed} 返回说明 
 * 
 */

let listeners = getListeners(),
listenerFn = listeners.get(event , fn , selector);

if(listenerFn){

    target.removeEventListener(event , listenerFn) ;
}