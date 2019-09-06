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

        let me = this ;

        me.activate() ;

        me.fireEvent('socketopen') ;
    }

    start(){

        let me = this,
        {
            io,
            isDisconnectd,
            isConnecting,
            isDisconnecting,
            isConnected
        } = me ;

        return new Promise(resolve =>{

            if(isDisconnectd){

                add(io , 'connect' , () => resolve() , {
                    once:true
                }) ;

                io.open() ;
    
            }else if(isConnected){
    
                resolve() ;
            
            }else if(isConnecting){

                add(me , 'socketopen' , () => resolve() , {
                    once:true
                }) ;
            
            }else if(isDisconnecting){

                add(me , 'socketclose' , () => me.start().then(resolve) , {
                    once:true
                }) ;
            }

        }) ;

        
    }

    end(){

        let me = this,
            {
                io,
                socket,
                isDisconnectd,
                isConnecting,
                isDisconnecting,
                isConnected
            } = me;

        return new Promise(resolve => {

            if(isConnected){

                add(socket , 'close' , () => {

                    me.fireEvent('socketclose') ;

                    resolve() ;

                } , {
                    once:true
                }) ;

                me.deactivate() ;
    
                io.close() ;
            
            }else if(isDisconnectd){

                resolve() ;

            }else if(isConnecting){

                add(me , 'socketopen' , () => me.end().then(resolve) , {
                    once:true
                }) ;
            
            }else if(isDisconnecting){

                add(me , 'socketclose' , () => resolve() , {
                    once:true
                }) ;
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