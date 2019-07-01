
/**
 * 
 * 绑定函数
 * 
 * @import get from function.get
 * 
 * @param {string} fn 绑定函数名称
 * 
 * @param {mixed} scope 绑定函数作用域
 * 
 */

let me = this,{
    bindCallbacks,
    cache
} = me;

if(!bindCallbacks.has(fn , scope)){

    fn = get(fn , scope) ;

    for(let {
        data,
        params
    } of cache){

        fn(data , params) ;
    }

    bindCallbacks.set(fn , scope , fn) ;

}

return me;