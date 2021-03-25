/**
 * 
 * 添加事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import add from .add
 * 
 * @import remove from .remove
 * 
 * @import get from function.get
 * 
 * @import listeners from ..listeners value
 * 
 * @import native from .native.add
 * 
 * @import is.array
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string|object} name 事件名称
 * 
 * @param {mixed} fn 事件回调
 * 
 * @param {object} [options = {}] 事件配置
 * 
 * @param {boolean} [options.once = false] 只监听一次
 * 
 * @param {object} [options.options] 浏览器事件监听所需要参数
 * 
 * @param {mixed} [options.scope] 事件作用域
 * 
 */

 if(isString(name)){

    scope = scope || target ;

    if(listeners.has(target , name , fn , scope)){

        return ;
    }

    let listener,
        listenerFn = get(fn , scope) ;

    if(listenerFn){

        if(once){

            listener = function(...args){

                listenerFn(...args) ;

                remove(target , name , fn , scope) ;
            } ;
        
        }else{

            listener = listenerFn ;
        }

        native(target , name , listener , options) ;

        listeners.set(target , name , fn , scope , {
            fn:listener,
            options
        }) ;
    }

 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name,
    names = Object.keys(listeners) ;

    scope = scope || target ;

    for(let name of names){

        let listener = listeners[name];

        if(isObject(listener)){

            let {
                fn,
                ...options
            } = listener ;

            options.scope = options.scope || scope ;

            add(target , name , fn , options) ;
        
        }else{

            add(target , name , listeners[name] , {
                scope
            }) ;
        }        
    }

 }else if(isArray(name)){

    for(let config of name){

        add(target , config) ;
    }
 }