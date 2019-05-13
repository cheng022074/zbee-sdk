/**
 * 
 * 绑定函数
 * 
 * @import is.defined
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

    async acceptData(data){

        let {
            bindCallbacks,
            accumulationMode,
            cache
        } = this,
        results = [];

        bindCallbacks.forEach(callback => {

            let result = callback(data) ;

            if(isDefined(result)){

                results.push(result) ;
            }

        }) ;

        let len = results.length ; 

        for(let i = 0 ; i < len ; i ++){

            let result = results[i] ;

            if(result instanceof Promise){

                results[i] = await result ;
            }
        }

        if(accumulationMode === false){

            cache.length = 0 ;
        }

        cache.push(data) ;

        return results ;
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

    unbindAll(){

        let me = this,
        {
            bindCallbacks
        } = me ;

        bindCallbacks.clear() ;

        return me ;
    }

 } ;