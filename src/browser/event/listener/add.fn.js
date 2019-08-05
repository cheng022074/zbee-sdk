
/**
 * 
 * 监听事件
 * 
 * @import getListeners from ....listeners
 * 
 * @import is from browser.selector.parent
 * 
 * @import stopEvent from ....stop
 * 
 * @import preventEvent from ....prevent
 * 
 * @param {mixed} target 目标
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {string} [config.selector] 选择器
 * 
 * @param {boolean} [config.stop = false] 停止冒泡
 * 
 * @param {boolean} [config.prevent = false] 禁用默认浏览器行为
 * 
 * @param {boolean} [config.once = false] 是否只监听一次
 * 
 * @return {mixed} 返回说明 
 * 
 */

let listeners = getListeners(),
    listenerFn = e =>{

        let {
            target
        } = e ;

        if(stop){
            
            stopEvent(e) ;
        }

        if(prevent){

            preventEvent(e) ;
        }

        if(selector){

            if(is(target , selector)){

                fn(e) ;
            }
            
        }else{

            fn(e) ;
        }

        if(once){

            target.removeEventListener(event , listenerFn) ;
        }
    };

listeners.set(target , event , fn , listenerFn) ;

target.addEventListener(event , listenerFn) ;