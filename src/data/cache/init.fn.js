
/**
 * 
 * 初始化缓存
 * 
 * @import isPromise from is.promise.native
 * 
 * @import is.function
 * 
 * @import init from .init scoped
 * 
 * @import processData from .data scoped
 * 
 * @param {mixed} operation 初始化缓存行为
 * 
 */

 if(isPromise(operation)){

    operation.then(init) ;
 
 }else if(isFunction(operation)){

    init(operation) ;
 
 }else{

    let me = this,
    {
        proxy
    } = me ;

    proxy.call('initCache' , operation) ;

    me.data = processData(operation) ;

 }