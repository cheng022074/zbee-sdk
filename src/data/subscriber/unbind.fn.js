
/**
 * 
 * 解绑函数
 * 
 * @import get from function.get
 * 
 * @param {mixed} fn 绑定函数名称
 * 
 * @param {mixed} scope 绑定函数作用域
 * 
 */

let me = this,{
    bindCallbacks,
    recentData
} = me;

if(bindCallbacks.has(fn , scope)){

    bindCallbacks.delete(fn , scope) ;

}

return me;