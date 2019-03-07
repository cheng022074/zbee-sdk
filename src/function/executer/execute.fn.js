
/**
 * 
 * 执行函数，如果当前是正在执行状态，则拒绝执行
 * 
 * @param {mixed} [...params] 执行函数参数 
 * 
 * @return {boolean}  如果执行失败，则返回 false , 否则返回 true
 * 
 */

let me = this ;

if(me.isExecuting === true){

    return false;
}

let {
    executeFn,
    executeScope,
    resultFn,
    resultScope
} = me ;

me.params = params ;

me.isExecuting = true ;

let result = executeFn.apply(executeScope , params) ;

if(result instanceof Promise){

    result.then(result =>{

        me.isExecuting = false ;

        if(resultFn){

            resultFn.call(resultScope , result) ;
        }

    }) ;

}else{

    me.isExecuting = false ;

    if(resultFn){

        resultFn.call(resultScope , result) ;
    }
}

return true ;