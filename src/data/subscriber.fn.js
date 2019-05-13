
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
        extraParams = {},
        defaultParams = {}
    }){

        super() ;

        let me = this ;

        me.name = name ;

        me.extraParams = extraParams ;

        me.defaultParams = defaultParams ;

        me.callbacks = createMap() ;

        me.accumulationMode = accumulationMode ;

        me.cache = [] ;
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

        let me = this,{
            callbacks,
            cache
        } = me;

        fn = get(fn , scope) ;

        for(let data of cache){

            fn(data) ;
        }

        callbacks.set(fn , scope , fn) ;

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
            callbacks
        } = me ;

        callbacks.delete(fn , scope) ;

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

        let {
            callbacks
        } = this ;

        for(let callback of callbacks){

            callback() ;
        }
    }
 }