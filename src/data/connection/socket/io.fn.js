/**
 * 
 * 基于 socket.io 标准进行开发
 * 
 * @import Connection from data.connection.socket value
 * 
 * @import add from event.listener.add
 * 
 * @import getWS from socket.io.ws
 * 
 * @import Manager from .manager value
 * 
 * @import removeAll from event.listener.remove.all
 * 
 * @require socket.io-client
 * 
 * @class
 * 
 */

 const IO = require('socket.io-client') ;

 class main extends Connection{

    initialize(url , options){

       let me = this ;

       me.socketURL = url ;

       me.socketOptions = options ;
    }

    get socket(){

        let {
            io
        } = this ;

        if(io){

            return getWS(this.io) ;
        }
    }

    onSocketTimeout(){

        this.fireEvent('connecttimeout') ;
    }

    onSocketMessage(...args){

        this.acceptMessage(...args) ;
    }

    onSocketDisconnect(){

        let me = this,
            {
                isDisconnected,
                socket
            } = me ;

        if(!isDisconnected && socket){

            add(socket , 'close' , 'onSocketDisconnect' , {
                scope:me,
                once:true
            }) ;
        
        }else{

            let me = this,
            {
                disconnectingState,
                io
            } = me ;

            removeAll(io) ;

            delete me.io ;

            delete me.disconnectingState ;

            if(disconnectingState){

                me.fireEvent('disconnect') ;
            
            }else{

                me.fireEvent('lostconnect') ;
            }
        }
    }

    onSocketError(){

        let me = this,
        {
            isDisconnected,
            onSocketError
        } = me;

        if(isDisconnected){

            me.onSocketDisconnect() ;
        
        }else{

            setTimeout(onSocketError.bind(me) , 0) ;
        }
    }

    onSocketConnect(){

        this.fireEvent('connect') ;
    }

    doConnect(){

        let me = this,
        {
            socketURL,
            socketOptions,
            messageEventName,
            subscribeResponseEventName
        } = me;

        add(me.io = IO(socketURL , {
            forceNew: true,
            transports: [
                'websocket'
            ],
            reconnection:false,
            ...socketOptions
        }) , {
            connect_error:'onSocketError',
            connect:'onSocketConnect',
            disconnect:'onSocketDisconnect',
            connect_timeout:'onSocketTimeout',
            [messageEventName]:'onSocketMessage',
            [subscribeResponseEventName]:'onSocketSubscribeResponse',
            scope:me
        }) ;
    }

    onSocketSubscribeResponse(){


    }

    doDisconnect(){

        this.io.disconnect() ;
    }

    get subscribeEventName(){

        return 'sub'
    }

    get messageEventName(){

        return 'msg' ;
    }


    get subscribeResponseEventName(){

        return 'subresp' ;
    }

    get unsubscribeEventName(){

        return 'unsub' ;
    }

    emit(event , ...params){

        let me = this,
        {
            isConnected,
            io
        } = me ;

        if(isConnected){

            io.emit(event , ...params) ;
        }
        
    }

    doSubscriberOpen(...args){

        let me = this,
        {
            subscribeEventName
        } = me ;

        me.emit(subscribeEventName , ...args) ;
    }

    doSubscriberClose(...args){

        let me = this,
        {
            unsubscribeEventName
        } = me ;

        me.emit(unsubscribeEventName , ...args) ;
    }
 }