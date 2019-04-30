
/**
 * 
 * 添加事件监听
 * 
 * @param {string} event 事件名称
 * 
 * @param {function} fn 事件回调函数
 * 
 * @param {mixed} [scope] 事件作用域
 * 
 * @param {object} [options = {}] 配置
 * 
 * @param {boolean} [options.once = false] 是否只监听一次
 * 
 */

let me = this,
{
    emitter,
    listeners
} = me,
listener = fn.bind(scope);

listeners.set(event , fn , scope , listener) ;

if(once){
    
     emitter.once(event , listener) ;

 }else{

     emitter.addListener(event , listener) ;
}