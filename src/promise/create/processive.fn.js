
/**
 * 
 * 创建持续性 Promise
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
    }

    cancel(){

        let {
            onCancelResult,
            onCancel
        } = this ;

        onCancel(onCancelResult) ;
    }

    resolve(data){

        let {
            resolveCallbacks
        } = this;

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
            resolveCallbacks
        } = me;

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