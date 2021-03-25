/**
 * 
 * 移除事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import remove from .remove
 * 
 * @import listeners from ..listeners value
 * 
 * @import native from .native.remove
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string|object|array} name 事件名称
 * 
 * @param {mixed} fn 事件回调
 * 
 * @param {mixed} [scope] 事件作用域
 * 
 */

 if(isString(name)){

    scope = scope || target ;

    if(fn){

        let listener = listeners.get(target , name , fn , scope) ;

        if(listener){

            let {
                fn:listenersFn,
                options
            } = listener ;

            native(target , name , listenersFn , options) ;

            listeners.delete(target , name , fn , scope) ;
        }
    
    }else{

        let result = listeners.find(target , name) ;

        for(let {
            key
        } of result){

            remove(target , name , key[2] , key[3]) ;
        }
    }
 
 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name,
    names = Object.keys(listeners);

    scope = scope || target ;

    for(let name of names){

        remove(target , name , listeners[name] , scope) ;
    }

 }else if(isArray(name)){

    let names = name ;

    for(let name of names){

        remove(target , name) ;
    }
 }