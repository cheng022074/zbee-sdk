
/**
 * 
 * 执行函数
 * 
 * @import is.function
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import get from .get
 * 
 * @import call from .call
 * 
 * @param {mixed} target 函数或者函数描述
 * 
 * @param {array} [...args] 函数参数
 * 
 * @return {mixed} 函数的返回值
 * 
 */

 if(isFunction(target)){

    return target(...args) ;

 }else if(isObject(target)){

    let {
        fn,
        scope
    } = target ;

    get(fn , scope).apply(scope , args) ;

 }else if(isArray(target)){

    let targets = target ;

    for(let target of targets){

        call(target , ...args) ;
    }
 }