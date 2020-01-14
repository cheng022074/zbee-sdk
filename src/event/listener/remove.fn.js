/**
 * 
 * 移除事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import remove from .remove
 * 
 * @import listeners from ..listeners value
 * 
 * @import native from .native.remove
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string} name 事件名称
 * 
 * @param {mixed} fn 事件回调
 * 
 * @param {object} [options = {}] 事件配置
 * 
 * @param {mixed} [options.scope] 事件作用域
 * 
 */

 scope = scope || target ;

 if(isString(name)){

    let listener = listeners.get(target , name , fn , scope) ;

    if(listener){

        native(target , name , listener) ;

        listeners.delete(target , name , fn , scope) ;
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