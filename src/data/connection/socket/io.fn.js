/**
 * 
 * 基于 socket.io 标准进行开发
 * 
 * @import Connection from data.connection.socket value
 * 
 * @import add from event.listener.add
 * 
 * @require socket.io-client
 * 
 * @class
 * 
 */

 const IO = require('socket.io-client') ;

 class main extends Connection{

    initialize(url , options){

        let me = this,
            socket = me.socket = IO(url , {
                forceNew: true,
                transports: [
                    'websocket'
                ],
                ...options
            }) ;

        add(socket , {
            connect:'onSocketConnect',
            reconnect:'onSocketConnect',
            [me.messageEventName]:'onSocketMessage',
            scope:me
        }) ;
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
            socket,
            isSocketConnecting,
        } = me ;

        return new Promise((resolve , reject) =>{

            if(socket.disconnected || isSocketConnecting){

                add(socket , {
                    connect(){

                        delete me.isSocketConnecting ;

                        callback() ;
                    },
                    once:true
                }) ;
            }

            if(socket.disconnected){

                me.isSocketConnecting = true ;

                socket.open() ;

                resolve() ;
            
            }else if(socket.connected || isSocketConnecting){

                resolve() ;
            
            }else{

                reject() ;
            }

        }) ;
    }

    end(){

        let me = this,
            {
                socket,
                isSocketClosing
            } = me;

        return new Promise((resolve , reject) =>{

            if(socket.connected || isSocketClosing){

                add(socket , {
                    disconnect(){

                        delete me.isSocketClosing ;

                        callback() ;
                    },
                    once:true
                }) ;
            }

            if(socket.connected){

                me.deactivate() ;

                me.isSocketClosing = true ;

                socket.close() ;

                resolve() ;
            
            }else if(socket.disconnected || isSocketClosing){

                resolve() ;
            
            }else{

                reject() ;
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
            socket
        } = me ;

        if(socket.connected){

            socket.emit(me[event] , ...params) ;
        }
        
    }

    doSubscriberOpen(...args){

        this.emit('subscribeEventName' , ...args) ;
    }

    doSubscriberClose(...args){

        this.emit('unsubscribeEventName' , ...args) ;
    }
 }