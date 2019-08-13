
/**
 * 
 * 去除监听事件
 * 
 * @import listeners from ....listeners value
 * 
 * @import remove from event.listener.remove
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

let listener = listeners.get(target , event , fn);

if(listener){

    remove(target , event , listener) ;

    listeners.delete(target , event , fn) ;
}