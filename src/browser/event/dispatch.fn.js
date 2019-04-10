
/**
 * 
 * 触发一个自定义事件
 * 
 * @param {mixed} target 目标对象
 * 
 * @param {string} name 自定义事件名称
 * 
 * @param {mixed} detail 基于自定义事件传递的数据
 * 
 */

 let {
    dispatchEvent,
    listeners
 } = target ;

 if(dispatchEvent){

    dispatchEvent.call(target , new CustomEvent(`event:${name}` , {
        bubbles:false,
        detail
    })) ;

 }else if(listeners && listeners.hasOwnProperty(name)){

    listeners[name](detail) ;
 }


