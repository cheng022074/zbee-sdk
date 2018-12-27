
/**
 * 
 * 函数绑定作用域
 * 
 * @import is from .bind.is
 * 
 * @import signature from .bind.signature
 * 
 * @param {function} fn 函数
 * 
 * @param {mixed} scope 作用域
 * 
 * @return {function} 绑定作用域的函数
 * 
 */

if(!is(fn)){

    let bindFn = fn.bind(scope) ;

    bindFn[signature()] = true ;

    return bindFn ;
}

return fn ;