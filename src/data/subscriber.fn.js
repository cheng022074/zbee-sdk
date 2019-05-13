
/**
 * 
 * 订阅器
 * 
 * @import assign from object.assign
 * 
 * @import Observable from mixin.observable
 * 
 * @import FunctionBind from mixin.bind.function
 * 
 * @import equals from object.equals
 * 
 * @import createMap from map
 * 
 * @class
 * 
 */

 class main extends mixins({
    mixins:[
        Observable,
        FunctionBind
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