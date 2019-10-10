/**
 * 
 * 标准推送
 * 
 * @import Connection from data.connection.socket value
 * 
 * @import join from url.join
 * 
 * @import createTimer from timer
 * 
 * @import add from event.listener.add
 * 
 * @import removeAll from event.listener.remove.all
 * 
 * @import Manager from ..manager value
 * 
 * @import emptyFn from function.empty value
 * 
 * @require ws
 * 
 * @class
 * 
 * 
 */

 const WebSocket = require('ws');

 class main extends Connection{

    initialize(url , {
        path,
        timeout = 20000,
        reconnection = true,
        reconnectionDelay = 1000,
        autoConnect = true
    }){

        let me = this ;
        
        if(path){

            url = join(url , path) ;
        }

        me.socketURL = url ;

        me.socketTimeoutTimer = createTimer({
            duration:timeout,
            autoStart:false,
            listeners:{
                timeout:'onSocketTimeout',
                scope:me
            }
        }) ;

        if(autoConnect){

            Manager.connect(me) ;
        }

        if(reconnection){

            add(me , 'lostconnect' , () => setTimeout(() => Manager.connect(me) , reconnectionDelay)) ;
        }
    }

    onSocketTimeout(){

        Manager.disconnect(me) ;

        Manager.connect(me) ;
    }

    onSocketOpen(){

        let me = this,
        {
            socketTimeoutTimer
        } = me;

        socketTimeoutTimer.end() ;

        me.activate() ;

        me.fireEvent('connect') ;
    }

    onSocketClose(){

        let me = this,
        {
            socket,
            socketTimeoutTimer
        } = me;

        socketTimeoutTimer.end() ;

        removeAll(socket) ;

        delete me.socket ;

        if(me.disconnectingState){

            me.fireEvent('disconnect') ;

            delete me.disconnectingState ;
        
        }else{

            me.fireEvent('lostconnect') ;
        }
    }

    onSocketMessage(data){

        this.acceptMessage(data) ;
    }

    connect(){

        let me = this,
        {
            socketTimeoutTimer,
            isDisconnected,
            socketURL
        } = me ;

        socketTimeoutTimer.start() ;

        if(isDisconnected){

            add(me.socket = new WebSocket(socketURL) , {
                open:'onSocketOpen',
                close:'onSocketClose',
                error:emptyFn,
                message:'onSocketMessage',
                scope:me
            }) ;
        }
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

            socket.close() ;
        }
    }

    send(message){

        let me = this,
        {
            socket,
            isConnected
        } = me ;

        if(isConnected){

            socket.send(message) ;
        }
    }
 }
