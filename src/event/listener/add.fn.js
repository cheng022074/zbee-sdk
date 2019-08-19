/**
 * 
 * 添加事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import add from ..add
 * 
 * @import remove from ..remove
 * 
 * @import get from function.get
 * 
 * @import listeners from ....listeners value
 * 
 * @import native from .native.add
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
 * @param {mixed} [options.scope] 事件作用域
 * 
 */

 if(isString(name)){

    if(listeners.has(target , name , fn)){

        return ;
    }

    let listener,
        listenerFn = get(fn , scope) ;

    if(listenerFn){

        if(once){

            listener = function(...args){

                listenerFn(args) ;

                remove(target , name , listener) ;
            } ;
        
        }else{

            listener = listenerFn ;
        }

        native(target , name , listener) ;

        listeners.set(target , name , fn , listener) ;
    }

 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name,
    names = Object.keys(listeners) ;

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
 }