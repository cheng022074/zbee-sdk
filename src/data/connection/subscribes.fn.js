
/**
 * 
 * 批量订阅
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import isObject from is.object.simple
 * 
 * @import get from function.get
 * 
 * @param {object} config 批量订阅配置
 * 
 * @return {mixed} 返回说明 
 * 
 */

let {
    scope,
    ...subscribers
} = config,
me = this,
names = Object.keys(subscribers),
result = {};

for(let name of names){

    let target = subscribers[name],
        subscriber;

    if(isString(target) || isFunction(target)){

        subscriber = me.subscribe(name).bind(get(subscribers[name] , scope) , scope) ;

    }else if(isObject(target)){

        let {
            fn,
            scope:currentScope,
            listeners = {},
            ...options
        } = target ;

        currentScope = currentScope || scope ;

        listeners.scope = listeners.scope || currentScope ;

        subscriber = me.subscribe(name , {
            fn,
            scope:currentScope,
            listeners,
            ...options
        }) ;
    }

    if(subscriber){

        result[name] = subscriber ;
    }
}

return result ;