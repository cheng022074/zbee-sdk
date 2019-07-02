
/**
 * 
 * 绑定函数
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

if(!bindCallbacks.has(fn , scope)){

    let bindFn = get(fn , scope) ;

    if(recentData){

        let {
            data,
            params
        } = recentData ;

        bindFn(data , params) ;
    }

    bindCallbacks.set(fn , scope , bindFn) ;

}

return me;