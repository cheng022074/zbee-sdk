
/**
 * 
 * 创建 Promise 对象
 * 
 * @import is.function
 * 
 * @import ProcessivePromise from promise.create.processive value
 * 
 * @param {function} onInit 实始化 Promise 引用
 * 
 * @param {function} [onCancel] 取消 Promise 时调用
 * 
 * @return {Promise} 创建后的 Promise
 * 
 */

 if(isFunction(onCancel)){

    return new ProcessivePromise(onInit , onCancel) ;
 }

 return new Promise(onInit) ;