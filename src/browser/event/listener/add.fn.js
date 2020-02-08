
/**
 * 
 * 监听事件
 * 
 * @import listeners from ..listeners value
 * 
 * @import is from browser.selector.parent
 * 
 * @import stopEvent from ..stop
 * 
 * @import preventEvent from ..prevent
 * 
 * @import add from event.listener.add
 * 
 * @param {mixed} target 目标
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {mixed} fn 目标监听回调
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

if(listeners.has(target , event , fn)){

    return ;
}

let listener = e =>{

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
    };

listeners.set(target , event , fn , listener) ;

add(target , event , listener , {
    once
}) ;