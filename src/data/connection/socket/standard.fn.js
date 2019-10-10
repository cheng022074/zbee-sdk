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
        timeout = 20000
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

        me.fireEvent('connect') ;
    }

    onSocketClose(){

        let me = this,
        {
            socket,
            socketTimeoutTimer,
            disconnectingState
        } = me;

        socketTimeoutTimer.end() ;

        removeAll(socket) ;

        delete me.socket ;

        if(disconnectingState){

            me.fireEvent('disconnect') ;
        
        }else{

            me.fireEvent('lostconnect') ;
        }
    }

    onSocketMessage(data){

        this.acceptMessage(data) ;
    }

    doConnect(){

        let me = this,
        {
            socketTimeoutTimer,
            socketURL
        } = me ;

        socketTimeoutTimer.start() ;

        add(me.socket = new WebSocket(socketURL) , {
            open:'onSocketOpen',
            close:'onSocketClose',
            error:emptyFn,
            message:'onSocketMessage',
            scope:me
        }) ;
    }

    doDisconnect(){

        this.socket.close() ;
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
