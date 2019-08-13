
/**
 * 
 * 添加只监听一次事件
 * 
 * @import add from ....add
 * 
 * @import remove from ....remove
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string} name 事件名称
 * 
 * @param {function} fn 事件回调
 * 
 */

 const onceFn = function(...args){

    fn.apply(this , args) ;

    remove(target , name , onceFn) ;
 }

 add(target , name , onceFn) ;