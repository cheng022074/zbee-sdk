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
            isSocketClosing,
            isSocketConnecting,
        } = me ;

        return new Promise(resolve =>{

            if(isSocketClosing){

                add(getWS(socket) , {
                    close(){

                        me.start().then(resolve) ;
                    },
                    once:true
                }) ;

                return ;
            }

            if(socket.disconnected || isSocketConnecting){

                add(socket , {
                    connect(){

                        delete me.isSocketConnecting ;

                        resolve() ;
                    },
                    once:true
                }) ;
            }

            if(socket.disconnected){

                me.isSocketConnecting = true ;

                socket.open() ;
            
            }else if(socket.connected){

                resolve() ;
            
            }

        }) ;
    }

    end(){

        let me = this,
            {
                socket,
                isSocketConnecting,
                isSocketClosing
            } = me;

        return new Promise(resolve =>{

            if(isSocketConnecting){

                add(socket , {
                    connect(){

                        me.end().then(resolve) ;
                    },
                    once:true
                }) ;

                return ;
            }

            if(socket.connected || isSocketClosing){

                add(getWS(socket) , {
                    close(){

                        delete me.isSocketClosing ;

                        resolve() ;
                    },
                    once:true
                })
            }

            if(socket.connected){

                me.deactivate() ;

                me.isSocketClosing = true ;

                socket.close() ;
            
            }else if(socket.disconnected){

                resolve() ;
            
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