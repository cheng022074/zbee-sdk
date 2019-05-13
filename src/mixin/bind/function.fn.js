
/**
 * 
 * 绑定函数
 * 
 * @import createMap from map
 * 
 * @import get from function.get
 * 
 * @param {mixed} Target 混合类
 * 
 * 
 */

 return class extends Target{

    constructor(){

        super() ;

        let me = this ;

        me.bindCallbacks = createMap() ;
    }

    acceptData(data){

        let {
            bindCallbacks,
            accumulationMode,
            cache
        } = this ;

        bindCallbacks.forEach(callback => callback(data)) ;

        if(accumulationMode === false){

            cache.length = 0 ;
        }

        cache.push(data) ;
    }

    /**
     * 
     * 绑定函数
     * 
     * @param {mixed} fn 函数
     * 
     * @param {mixed} scope 作用域
     */
    bind(fn , scope){

        let me = this,{
            bindCallbacks,
            cache
        } = me;

        fn = get(fn , scope) ;

        for(let data of cache){

            fn(data) ;
        }

        bindCallbacks.set(fn , scope , fn) ;

        return me;
    }
    /**
     * 
     * 解绑函数
     * 
     * @param {mixed} fn 函数
     * 
     * @param {mixed} scope 作用域
     */
    unbind(fn , scope){

        let me = this,
        {
            bindCallbacks
        } = me ;

        bindCallbacks.delete(fn , scope) ;

        return me ;
    }

 } ;