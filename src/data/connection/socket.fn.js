
/**
 * 
 * Socket 通信
 * 
 * @import Connection from data.connection value
 * 
 * @import isObject from is.object.simple
 * 
 * @import getKeys from object.keys
 * 
 * @import getValue from object.value.get
 * 
 * @import createTimer from timer
 * 
 *  @import observable from mixin.observable
 * 
 * @class
 * 
 */

 class main extends mixins({
    extend:Connection,
    mixins:[
       observable
    ]
}){

    constructor({
        autoStart = true,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.initialize() ;

        if(autoStart){

            this.start() ;
        }
    }

    initialize(){

        
    }

    get isConnecting(){

        return false ;
    }

    get isConnected(){

        return false ;
    }

    get isDisconnecting(){

        return false ;
    }

    get isDisconnected(){

        return false ;
    }

    async get isValid(){

        return false ;
    }

    restart(){

        let me = this ;

        await me.end() ;

        await me.start() ;
    }

    async start(){

        let me = this,
        {
            isConnected,
            isConnecting
        } = me ;

        if(isConnected || isConnecting){

            return ;
        }

        await me.doStart() ;
    }

    doStart(){


    }

    async end(){

        let me = this,
        {
            isDisconnected,
            isDisconnecting
        } = me ;

        if(isDisconnected || isDisconnecting){

            return ;
        }

        await me.doEnd() ;
    }

    doEnd(){


    }

    validateMessage({
        params:baseParams
    },{
        params:equalParams
    }){

        let names = Object.keys(equalParams) ;

        for(let name of names){

            if(baseParams[name] !== equalParams[name]){

                return false ;
            }
        }

        return true ;
    }
 }