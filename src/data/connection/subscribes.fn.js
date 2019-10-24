
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
 * @return {object} 实例化后的订阅器集合
 * 
 */

let {
    scope,
    connectionId,
    ...subscribers
} = config,
me = this,
names = Object.keys(subscribers),
result = {};

for(let name of names){

    let target = subscribers[name],
        subscriber;

    if(isString(target) || isFunction(target)){

        subscriber = me.subscribe(name , {
            fn:target,
            connectionId,
            scope
        }) ;

    }else if(isObject(target)){

        subscriber = me.subscribe(name , {
            ...target,
            connectionId,
            scope
        }) ;
    }

    if(subscriber){

        result[name] = subscriber ;
    }
}

return result ;