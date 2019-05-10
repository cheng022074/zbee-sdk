
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
        autoOpen = true,
        extraParams = {},
        defaultParams = {},
        params = {}
    }){

        super() ;

        let me = this ;

        me.name = name ;

        me.extraParams = extraParams ;

        me.defaultParams = defaultParams ;

        me.params = params ;

        if(listeners){

            me.addListeners(listeners) ;
        }

        if(autoOpen){

            me.open(params) ;
        }
    }

    open(params = {}){

        let me = this,
        {
            extraParams,
            defaultParams,
            oldParams
        } = this ;
        
        params = assign({} , defaultParams , params , extraParams) ;

        if(!oldParams || !equals(params , oldParams)){

            me.fireEvent('open' , params , oldParams) ;

            me.oldParams = params ;
        }
    }

    get remoteParams(){

        return this.params ;
    }
 }