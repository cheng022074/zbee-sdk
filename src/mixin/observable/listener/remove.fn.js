
/**
 * 
 * 移除事件监听
 * 
 * @param {string} event 事件名称
 * 
 * @param {function} fn 事件回调函数
 * 
 * @param {mixed} [scope] 事件作用域
 * 
 * 
 */

let me = this,
{
    listeners,
    emitter
} = me,
listener = listeners.get(event , fn , scope) ;

if(listener){

    emitter.removeListener(event , listener) ;

    listeners.delete(event , fn , scope) ;
}