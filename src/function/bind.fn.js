
/**
 * 
 * 函数绑定作用域
 * 
 * @param {function} fn 函数
 * 
 * @param {mixed[]} [args = []] 函数参数
 * 
 * @param {mixed} [scope] 作用域
 * 
 * @return {function} 绑定作用域的函数
 * 
 */

if(scope){

    return fn.bind(scope , ...args) ;

}

return function(...newArgs){
    
    return fn.call(this , ...args , ...newArgs) ;
} ;