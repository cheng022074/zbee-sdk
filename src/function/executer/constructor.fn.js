import { isObject } from "util";

/**
 * 
 * 构建函数执行器
 * 
 * @import is.string
 * 
 * @import is.object
 * 
 * @import get from function.get
 * 
 * @param {object} config 执行器配置
 * 
 * @param {object|string} config.execute 执行函数
 * 
 * @param {number} [config.period = 0] 规定每隔多长时间重新执行一次
 * 
 * @param {object|string} [config.result] 结果函数
 * 
 */

let me = this ;

if(isString(execute)){

    me.executeFn = get(execute) ;


}else if(isObject(execute)){

    let {
        fn,
        scope
    } = execute ;

    me.executeFn = get(fn , scope) ;

    me.executeScope = scope ;
}

if(isString(result)){

    me.resultFn = get(result) ;


}else if(isObject(result)){

    let {
        fn,
        scope
    } = result ;

    me.resultFn = get(fn , scope) ;

    me.resultScope = scope ;
}

me.period = period ;

me.isExecuting = true ;