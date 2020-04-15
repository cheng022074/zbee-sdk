
/**
 * 
 * 函数绑定作用域
 * 
 * @import clone from array.clone
 * 
 * @import insert from array.insert
 * 
 * @import is.number
 * 
 * @param {function} fn 函数
 * 
 * @param {mixed} [scope] 作用域
 * 
 * @param {mixed[]} [args] 函数参数
 * 
 * @param {mixed} [appendArgs = true] 附加参数位置
 * 
 * @return {function} 绑定作用域的函数
 * 
 */

if(arguments.length <= 2 ){

    return fn.bind(scope) ;

}

return function() {

    let callArgs = args || arguments;

    if(appendArgs === true){

        callArgs = [
            ...arguments,
            ...(args || [])
        ];
        
    }else if (isNumber(appendArgs)){

        callArgs = clone(arguments);
        
        insert(callArgs , appendArgs, args);
    }

    return fn.apply(scope || this, callArgs);
};