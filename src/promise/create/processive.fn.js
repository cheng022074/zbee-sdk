
/**
 * 
 * 创建持续性 Promise
 * 
 * @import is.function
 * 
 * @import remove from array.remove
 * 
 * @import includes from array.includes
 * 
 * @import is.empty
 * 
 * @param {function} onInit 实始化 Promise 引用
 * 
 * @param {function} onCancel 取消 Promise 时调用
 * 
 * @class
 * 
 * @return {promise.Processive} 持续性 Promise 
 * 
 */

 class main{

    constructor(onInit , onCancel){

        let me = this ;

        me.resolveCallbacks = [] ;

        me.rejectCallbacks = [] ;

        let {
            resolve,
            reject
        } = me ;

       me.onCancelResult = onInit(resolve.bind(me) , reject.bind(me)) ;

       me.onCancel = onCancel ;

       me.caches = [] ;
    }

    async cancel(callback){

        let {
            onCancelResult,
            onCancel,
            resolveCallbacks
        } = this ;

        if(isFunction(callback)){

            if(includes(resolveCallbacks , callback)){

                remove(resolveCallbacks , callback) ;
            }

            if(isEmpty(resolveCallbacks)){

                await onCancel(onCancelResult) ;
            }
        
        }else{

            await onCancel(onCancelResult) ;
        }
    }

    resolve(data){

        let {
            resolveCallbacks,
            caches
        } = this;

        caches.push(data) ;

        for(let resolveCallback of resolveCallbacks){

            data = resolveCallback(data) ;
        }
    }

    reject(error){

        let {
            rejectCallbacks
        } = this ;

        for(let rejectCallback of rejectCallbacks){

            rejectCallback(error) ;
        }
    }

    then(callback){

        let me = this,
        {
            resolveCallbacks,
            caches
        } = me;

        if(caches.length){

            for(let cache of caches){

                callback(cache) ;
            }
        }

        resolveCallbacks.push(callback) ;

        return me ;
    }

    catch(callback){

        let me = this,
        {
            rejectCallbacks
        } = me;

        rejectCallbacks.push(callback) ;

        return me ;
    }
 }