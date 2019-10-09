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

        me.connectLocked = true ;
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

        if(me.connectLocked){

            me.fireEvent('lostconnect') ;

            delete me.connectLocked ;
        
        }else{

            me.fireEvent('disconnect') ;
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

            delete me.connectLocked ;

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
