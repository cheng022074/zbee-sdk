
/**
 * 
 * 绑定函数
 * 
 * @import get from function.get
 * 
 * @param {fucntion} fn 绑定函数
 * 
 * @param {mixed} scope 绑定函数作用域
 * 
 */

let me = this,{
    bindCallbacks,
    cache
} = me;

fn = get(fn , scope) ;

for(let {
    data,
    params
} of cache){

    fn(data , params) ;
}

bindCallbacks.set(fn , scope , fn) ;

return me;