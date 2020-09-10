
/**
 * 
 * 针对 Socket.io 再封装
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @import environment from environment.name value
 * 
 * @import Observable from mixin.observable
 * 
 * @import .parser value
 * 
 * @import is.defined
 * 
 * @import is.number
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} options Socket.io 配置
 * 
 */

 const IO = require('socket.io-client') ;

 const browserRe = /browser$/ ;

 class main extends mixins({
     mixins:[
        Observable
     ]
 }){

    constructor({
        url,
        path,
        dataEventName = 'data',
        reconnection = true
    }){

        super() ;

        let me = this ;

        me.dataEventName = dataEventName ;
        
        me.reconnectionMax = Number.MAX_VALUE ;

        if(isDefined(reconnection)){

            if(reconnection === true){

                me.reconnectionDelay = 1000 ;
            
            }else if(isNumber(reconnection)){

                me.reconnectionDelay = reconnection ;
            
            }else if(isObject(reconnection)){

                let {
                    delay = 1000,
                    max = 5000 
                } = reconnection ;

                me.reconnectionDelay = delay ;

                me.reconnectionMax = max ;
            }
        }

        me.url = url ;

        me.path = path ;

        me.state = 3 ;

        me.connect() ;

        if(browserRe.test(environment)){

            add(window , {
                offline:'onOffline',
                online:'onOnline',
                visibilitychange:'onVisibilityChange',
                scope:me
            }) ;
        }
    }

    onOnline(){

        this.connect() ;
    }

    onOffline(){

        this.disconnect() ;
    }

    onVisibilityChange(){

        let me = this ;

        if(document.visibilityState){

            me.connect() ;
        
        }else{

            me.disconnect() ;
        }
    }

    isDisconnected(){

        return this.state === 3 ;
    }

    isConnected(){

        return this.state === 1 ;
    }

    isConnecting(){

        return this.state = 0 ;
    }

    isDisconnecting(){

        return this.state === 2 ;
    }

    async connect(){

        let me = this ;

        if(me.isConnected()){

            return ;
        }

        if(me.isDisconnected()){

            me.state = 0 ;

            createSocket.call(me) ;

            return await (me.transitionState = new Promise(callback => add(me , 'connect' , () => callback() , {
                once:true
            }))) ;

        }

        let isDisconnecting = me.isDisconnecting() ;

        await me.transitionState ;

        if(isDisconnecting){

            await me.connect() ;
        }
    }

    async disconnect(){

        let me = this ;

        if(me.isDisconnected()){

            return ;
        }

        if(me.isConnected()){

            me.state = 2 ;

            me.socket.disconnect() ;

            return await (me.transitionState =  new Promise(callback => add(me , 'disconnect' , () => callback() , {
                once:true
            }))) ;
        }

        let isConnecting = me.isConnecting() ;

        await me.transitionState ;

        if(isConnecting){

            await me.disconnect() ;
        }
    }

    onConnect(){

        let me = this ;

        me.state = 1 ;
        
        delete me.transitionState ;

        me.fireEvent('connect') ;
    }

    onDisconnect(){

        let me = this,
        {
            state:oldState
        } = me;

        me.state = 3 ;

        delete me.transitionState ;

        if(oldState === 2){

            me.fireEvent('disconnect') ;
        
        }else{

            me.autoReconnect() ;
        }
    }

    autoReconnect(){

        let me = this,
        {
            reconnectionCount = 0,
            reconnectionMax,
            reconnectionDelay
        } = me;

        if(!isDefined(reconnectionDelay)){

            me.fireEvent('connect_error') ;

            return ;
        }

        reconnectionCount ++ ;

        if(reconnectionCount > reconnectionMax){

            delete me.reconnectionCount ;

            me.fireEvent('connect_error') ;

        }else{

            me.reconnectionCount = reconnectionCount ;

            setTimeout(() => {

                me.connect() ;

                me.fireEvent('reconnecting' , reconnectionCount) ;

            } , reconnectionDelay) ;
        }
    }

    onData(...params){

        this.fireEvent('data' , ...params) ;
    }

    onError(){

        let me = this,
        {
            state
        } = me ;

        if(state === 0){

            me.onDisconnect() ;
        }
    }

    async emit(event , ...params){

        let me = this,
        {
            socket
        } = me;

        if(me.isConnected()){
    
            socket.emit(event , ...params) ;
        
        }else{

            await me.connect() ;

            me.emit(event , ...params) ;
        }
    }
 }

 function createSocket(){

    let me = this,
    {
        url,
        path,
        socket,
        dataEventName
    } = me ;

    if(socket){

        remove(socket , {
            connect:'onConnect',
            disconnect:'onDisconnect',
            connect_error:'onError',
            scope:me
        }) ;
    }

    add(me.socket = IO(url , {
        path,
        forceNew: true,
        transports: [
            'websocket'
        ],
        reconnection:false
    }) , {
        connect:'onConnect',
        disconnect:'onDisconnect',
        connect_error:'onError',
        [dataEventName]:'onData',
        scope:me
    }) ;
 }