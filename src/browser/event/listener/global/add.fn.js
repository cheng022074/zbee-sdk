
/**
 * 
 * 监听全局事件
 * 
 * @import getListeners from ..browser.event.listeners
 * 
 * @import is from browser.selector.parent
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
    listenerFn = e =>{

        let {
            target
        } = e ;

        if(selector){

            if(is(target , selector)){

                fn(e) ;
            }
            
        }else{

            fn(e) ;
        }
    };

map.set(event , fn , selector , listenerFn) ;

window.addEventListener(event , listenerFn) ;