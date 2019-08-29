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
 * @require socket.io-client
 * 
 * @class
 * 
 */

 const IO = require('socket.io-client') ;

 class main extends Connection{

    initialize(url , options){

        let me = this ;

        add(me.io = IO(url , {
            forceNew: true,
            transports: [
                'websocket'
            ],
            ...options
        }) , {
            connect:'onSocketConnect',
            reconnect:'onSocketConnect',
            [me.messageEventName]:'onSocketMessage',
            scope:me
        }) ;
    }

    get socket(){

        return getWS(this.io) ;
    }

    onSocketMessage(...args){

        this.acceptMessage(...args) ;
    }
    
    onSocketConnect(){

        this.activate() ;
    }

    start(){

        let me = this,
        {
            io
        } = me ;

        return new Promise(resolve =>{

            if(io.disconnected){

                add(io , 'connect' , () => resolve(true) , {
                    once:true
                }) ;

                io.open() ;
    
            }else{

                resolve(false) ;
            }

        }) ;

        
    }

    end(){

        let me = this,
            {
                io,
                socket
            } = me;

        return new Promise(resolve => {

            if(io.connected){

                add(socket , 'close' , () => resolve(true) , {
                    once:true
                }) ;

                me.deactivate() ;
    
                io.close() ;
            
            }else{

                resolve(false) ;
            }

        }) ;

        
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

        this.emit('subscribeEventName' , ...args) ;
    }

    doSubscriberClose(...args){

        this.emit('unsubscribeEventName' , ...args) ;
    }
 }