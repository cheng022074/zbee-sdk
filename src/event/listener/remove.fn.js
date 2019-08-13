/**
 * 
 * 移除事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import remove from ..remove
 * 
 * @import listeners from ....listeners value
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string} name 事件名称
 * 
 * @param {mixed} fn 事件回调
 * 
 */

 if(isString(name)){

    let listener = listeners.get(target , name , fn) ;

    if(listener){

        target.removeEventListener(name , listener) ;
    }
 
 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name,
    names = Object.keys(listeners);

    for(let name of names){

        remove(target , name , listeners[name]) ;
    }

 }