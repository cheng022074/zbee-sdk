
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

        subscriber = me.subscribe(name , {
            fn:target,
            scope
        }) ;

    }else if(isObject(target)){

        subscriber = me.subscribe(name , {
            ...target,
            scope
        }) ;
    }

    if(subscriber){

        result[name] = subscriber ;
    }
}

return result ;