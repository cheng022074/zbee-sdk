
/**
 * 
 * 执行函数，如果当前是正在执行状态，则拒绝执行
 * 
 * @import is.defined
 * 
 * @param {mixed} [...params] 执行函数参数 
 * 
 * @return {function.Executer} 函数执行器本身
 * 
 */

 function main(...params){

    let me = this ;

    let {
        target,
        callbacks
    } = me ;

    me.params = params ;

    me.isExecuting = true ;

    let result = target(...params) ;

    if(result instanceof Promise){

        result.then(result => doCallback.call(me , callbacks , result)) ;

    }else{

        doCallback.call(me , callbacks , result) ;

    }

    return me ;

 }

 function doCallback(callbacks , result){

    for(let callback of callbacks){

        let itemResult = callback(result , params) ;

        if(isDefined(itemResult)){

            result = itemResult ;
        }
    }

 }