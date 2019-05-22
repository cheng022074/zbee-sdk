
/**
 * 
 * 去除监听全局事件
 * 
 * @import getEventName from browser.event.name
 * 
 * @import getMap from ..map
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

 event = getEventName(event) ;

 let map = getMap(),
    listenerFn = map.get(event , fn , selector);

if(listenerFn){

    window.removeEventListener(event , listenerFn) ;
}