
/**
 * 
 * 移除事件监听
 * 
 * @param {string} event 事件名称
 * 
 * @param {function} fn 事件回调函数
 * 
 * 
 */

let {
    emitter
} = this ;

emitter.removeListener(event , fn) ;
