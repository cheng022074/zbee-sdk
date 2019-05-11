
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

        me.callbacks = createMap() ;

        if(listeners){

            me.addListeners(listeners) ;
        }

        me.opened = false ;

        if(autoOpen){

            me.open(params) ;
        }

        me.on('data' , 'onData' , me) ;
    }

    connect(params = {}){

        let me = this;

        me.disconnect() ;

        {
            extraParams,
            defaultParams,
            params:oldParams
        } = this ;
        
        params = assign({} , defaultParams , params , extraParams) ;

        if(!oldParams || !equals(params , oldParams)){

            me.fireEvent('connect' , params , oldParams) ;

            me.params = params ;

            me.opened = true ;
        }
    }

    disconnect(){

        let me = this,
        {
            opened
        } = me ;

        if(opened){

            me.opened = false ;

            let {
                oldParams
            } = me ;

            me.fireEvent('disconnect' , oldParams) ;
        }
    }

    bind(fn , scope){

        this.callbacks.set(fn , scope , get(fn , scope)) ;
    }

    unbind(fn , scope){

        this.callbacks.delete(fn , scope , get(fn , scope)) ;
    }

    accept(message){

        let me = this ;

        callbacks.forEach(callback => callback(message)) ;
    }

    destroy(){

        let me = this ;

        me.disconnect() ;

        me.removeAllListeners() ;

        me.callbacks.clear() ;
    }
 }