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
 * @import Manager from ..manager value
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
            socketOptions
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
            [me.messageEventName]:'onSocketMessage',
            scope:me
        }) ;
    }

    doDisconnect(){

        this.io.disconnect() ;
    }

    get messageEventName(){

        return 'msg' ;
    }


    get subscribeEventName(){

        return 'sub' ;
    }

    get unsubscribeEventName(){

        return 'unsub' ;
    }

    emit(event , ...params){

        let me = this,
        {
            io
        } = me ;

        if(io.connected){

            io.emit(me[event] , ...params) ;
        }
        
    }

    doSubscriberOpen(...args){

        let me = this,
        {
            subscribeEventName
        } = me ;

        this.emit(subscribeEventName , ...args) ;
    }

    doSubscriberClose(...args){

        let me = this,
        {
            unsubscribeEventName
        } = me ;

        me.emit(unsubscribeEventName , ...args) ;
    }
 }