
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
        autoOpen = true,
        extraParams = {},
        defaultParams = {},
        params
    }){

        super() ;

        let me = this ;

        me.name = name ;

        me.extraParams = extraParams ;

        me.defaultParams = defaultParams ;

        me.callbacks = createMap() ;

        me.accumulationMode = accumulationMode ;

        me.cache = [] ;

        if(autoOpen){

            me.open(params) ;
        }
    }

    acceptData(data){

        let {
            callbacks,
            accumulationMode,
            cache
        } = this ;

        callbacks.forEach(callback => callback(data)) ;

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

        let {
            callbacks,
            cache
        } = this;

        fn = get(fn , scope) ;

        for(let data of cache){

            fn(data) ;
        }

        callbacks.set(fn , scope , fn) ;
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

        let {
            callbacks
        } = this ;

        callbacks.delete(fn , scope) ;
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
 }