/**
 * 
 * 添加事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @import get from function.get
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string|object} name 事件名称
 * 
 * @param {function} fn 事件回调
 * 
 * @param {object} [options = {}] 事件配置
 * 
 */

 if(isString(name)){

    let {
        scope,
        once = false
    } = options ;

    fn = get(fn , scope) ;

    if(fn){

        if(once){

            let onceFn = function(...args){

                fn(args) ;

                remove(target , name , onceFn) ;
            }

            target.addEventListener(name , fn) ;
        
        }else{

            target.addEventListener(name , fn) ;
        }
    }

 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name ;

    let names = Object.keys(listeners) ;

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

            add(target , name , fn , {
                scope
            }) ;
        }        
    }
 }