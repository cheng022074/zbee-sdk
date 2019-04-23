
/**
 * 
 * 监听全局事件
 * 
 * @import getEventName from browser.event.name
 * 
 * @import getMap from ..map
 * 
 * @import is from browser.selector.parent
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

event = getEventName(event) ;
 
let map = getMap(),
    listenerFn = e =>{

        let {
            target
        } = e ;

        if(is(target , selector)){

            fn(e) ;
        }
    };

map.set(selector , event , fn , listenerFn) ;

document.addEventListener(event , listenerFn) ;


