/**
 * 
 * 获得一个函数引用
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import empty from function.empty
 * 
 * @param {string | function} fn 函数描述
 * 
 * @param {mixed} [scope] 函数作用域
 * 
 * @return {function} 函数引用本身 
 * 
 */

if(isString(fn)){

    if(scope && fn in scope){

        fn = scope[fn] ;

    }else{

        try{

            fn = include(fn) ;
        
        }catch(err){


        }

        
    }
}

if(isFunction(fn)){

    if(scope){

        return fn.bind(scope) ;
    }

    return fn ;
}

return empty() ;