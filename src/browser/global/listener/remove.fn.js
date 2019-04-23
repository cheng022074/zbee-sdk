
/**
 * 
 * 去除监听全局事件
 * 
 * @import getEventName from browser.event.name
 * 
 * @import getMap from ..map
 * 
 * @param {string} selector 选择器
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let event = getEventName(event) ;

 let map = getMap(),
    listenerFn = map.get(selector , event , fn);

if(listenerFn){

    document.removeEventListener(event , listenerFn) ;
}