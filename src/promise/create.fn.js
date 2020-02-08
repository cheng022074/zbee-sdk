
/**
 * 
 * 创建 Promise 对象
 * 
 * @import is.function
 * 
 * @import createPromise from promise.create.processive
 * 
 * @param {function} onInit 实始化 Promise 引用
 * 
 * @param {function} [onCancel] 取消 Promise 时调用
 * 
 * @return {Promise} 创建后的 Promise
 * 
 */

 if(isFunction(onCancel)){

    return createPromise(onInit , onCancel) ;
 }

 return new Promise(onInit) ;