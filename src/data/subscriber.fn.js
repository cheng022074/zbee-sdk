
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
        listeners,
        autoLoad = true,
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

        if(listeners){

            me.addListeners(listeners) ;
        }

        if(autoLoad){

            me.load(params) ;
        }
    }

    /**
     * 
     * 绑定函数
     * 
     * @param {mixed} fn 函数
     * 
     * @param {mixed} scope 作用域
     */
    connect(fn , scope){

        let {
            callbacks
        } = this ;

        callbacks.set(fn , scope , get(fn , scope)) ;
    }
    /**
     * 
     * 解绑函数
     * 
     * @param {mixed} fn 函数
     * 
     * @param {mixed} scope 作用域
     */
    disconnect(fn , scope){

        let {
            callbacks
        } = this ;

        callbacks.delete(fn , scope) ;
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
            params
        } = me;

        if(params){

            me.fireEvent('close' , params) ;

            delete me.params ;
        }
    }
 }