
/**
 * 
 * 订阅器
 * 
 * @import assign from object.assign
 * 
 * @import Observable from mixin.observable
 * 
 * @import equals from object.equals
 * 
 * @import createMap from map
 * 
 * @import is.defined
 * 
 * @import get from function.get
 * 
 * @class
 * 
 */

 class main extends mixins({
    mixins:[
        Observable
    ]
}){

    constructor(name , {
        accumulationMode = false,
        extraParams = {},
        defaultParams = {}
    }){

        super() ;

        let me = this ;

        me.name = name ;

        me.extraParams = extraParams ;

        me.defaultParams = defaultParams ;

        me.accumulationMode = accumulationMode ;

        me.cache = [] ;

        me.bindCallbacks = createMap() ;
    }

    acceptData(data){

        let {
            bindCallbacks,
            accumulationMode,
            cache,
            params
        } = this,
        results = [];

        bindCallbacks.forEach(callback => {

           let result = callback(data , params) ;

           if(isDefined(result)){

                results.push(result) ;
           }

        }) ;

        if(accumulationMode === false){

            cache.length = 0 ;
        }

        cache.push({
            params,
            data
        }) ;

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

        for(let {
            data,
            params
        } of cache){

            fn(data , params) ;
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

    /**
     * 
     * 重新打开
     * 
     */
    reopen(){

        let me = this,
        {
            params
        } = me ;

        if(params){

            me.close() ;

            me.open(params) ;
        }
    }

    /**
     * 
     * 打开
     * 
     * @param {object} params 加载参数
     * 
     */
    open(params = {}){

        let me = this,
        {
            extraParams,
            defaultParams,
            params:oldParams
        } = me ;

        params = assign({} , defaultParams , params , extraParams) ;

        if(!oldParams || !equals(params , oldParams)){

            me.close() ;

            me.params = params ;
            
            me.fireEvent('open' , params , oldParams) ;
        }
    }

    /**
     * 
     * 关闭
     * 
     */
    close(){

        let me = this,
        {
            params,
            cache
        } = me;

        if(params){

            delete me.params ;

            cache.length = 0 ;

            me.fireEvent('close' , params) ;
        }
    }

    destroy(){

       let me = this ;

       me.close() ;

       me.unbindAll() ;
    }
 }