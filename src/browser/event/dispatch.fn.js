
/**
 * 
 * 触发一个自定义事件
 * 
 * @param {string} name 自定义事件名称
 * 
 * @param {mixed} detail 基于自定义事件传递的数据
 * 
 */

 let me = this,
 {
    dispatchEvent,
    listeners
 } = me ;

 if(dispatchEvent){

    dispatchEvent.call(me , new CustomEvent(`event:${name}` , {
        bubbles:false,
        detail
    })) ;

 }else if(listeners && listeners.hasOwnProperty(name)){

    listeners[name](detail) ;
 }

