/**
 * 
 * 构建函数执行器
 * 
 * @import get from function.get
 * 
 * @param {function |string} fn 执行函数
 * 
 */

let me = this ;

me.target = get(fn) ;

me.isExecuting = false ;

me.callbacks = [] ;