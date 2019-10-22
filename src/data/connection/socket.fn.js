

/**
 * 
 * Socket 通信
 * 
 * @import Connection from data.connection value
 * 
 * @import observable from mixin.observable
 * 
 * @import add from event.listener.add
 * 
 * @import Manager from .socket.manager value
 * 
 * @class
 * 
 */

 class main extends Connection{

    constructor({
        socket,
        ...superOptions
    }){

        super(superOptions) ;

        let me = this ;

        let {
            url,
            ...options
        } = socket,
        {
            reconnection = true,
            reconnectionDelay = 1000,
            autoConnect = true,
            ...otherOptions
        } = options;

        me.initialize(url , otherOptions) ;

        if(autoConnect){

            Manager.connect(me) ;
        }

        if(reconnection){

            add(me , {
                lostconnect:'onReconnect',
                connecttimeout:'onReconnect',
                scope:me
            }) ;
        }

        add(me , 'connect' , () => me.activate()) ;

        me.reconnectionDelay = reconnectionDelay ;
    }

    onReconnect(){

        let me = this,
        {
            reconnectionDelay
        } = me;

        setTimeout(() => {

            Manager.disconnect(me) ;

            Manager.connect(me) ;

        } , reconnectionDelay) ;
        
    }

    initialize(url , options){


    }

    get isConnected(){

        return isState.call(this , 1) ;
    }

    get isConnecting(){

        return isState.call(this , 0) ;
    }

    get isDisconnecting(){

        return isState.call(this , 2) ;
    }
    
    get isDisconnected(){

        return isState.call(this , 3) ;
    }

    connect(){

        let me = this,
        {
            isDisconnected
        } = me ;

        if(isDisconnected){

           me.doConnect() ;
        }
    }

    doConnect(){

    }

    disconnect(){

        let me = this,
        {
            socket,
            isDisconnected,
            isDisconnecting
        } = me ;

        if(!isDisconnected || !isDisconnecting){

            me.disconnectingState = true ;

            me.deactivate() ;

            me.doDisconnect() ;

            add(socket , 'close' , () => delete me.disconnectingState , {
                once:true
            }) ;
        }
    }

    doDisconnect(){

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

 function isState(state){

    let {
        socket
    } = this ;

    if(!socket){

        return state === 3 ;
    }

    return socket.readyState === state ;
 }