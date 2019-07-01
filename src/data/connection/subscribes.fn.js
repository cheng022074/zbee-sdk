
/**
 * 
 * 批量订阅
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import get from function.get
 * 
 * @param {object} config 批量订阅配置
 * 
 * @return {object} 实例化后的订阅器集合
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

    if(isString(target)){

        subscriber = me.subscribe(name).bind(target , scope) ;

    }else if(isObject(target)){

        let {
            fn,
            listeners = {},
            ...options
        } = target ;

        listeners.scope = scope ;

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