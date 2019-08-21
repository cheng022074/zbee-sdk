/**
 * 
 * 基于 socket.io 标准进行开发
 * 
 * @import Connection from data.connection.socket value
 * 
 * @import get from function.get
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
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
    
    doStart(){

        let me = this,
            {
                messageEventName,
                socketURL,
                socketOptions
            } = me;

        return new Promise((resolve , reject) => {

            let socket = IO(socketURL , {
                ...socketOptions,
                autoConnect:true,
                forceNew: true,
                reconnection:false,
                transports: [
                    'websocket',
                    'polling'
                ]
            });
    
            add(socket , {
                connect(){

                    me.socket = socket ;

                    removeAll(socket) ;

                    add(socket , {
                        [messageEventName]:{
                            fn:'acceptMessage',
                            scope:me
                        },
                        connect_error(){

                            me.restart() ;
                        }
                    }) ;

                    resolve() ;
                },
                connect_error(){

                    removeAll(socket) ;

                    reject() ;
                }
            }) ;

        }) ;
    }

    doEnd(){

        let me = this ;

        return new Promise(callback =>{

            let {
                socket
            } = me ;

            socket.once('disconnect' , () =>{

                removeAll(socket) ;

                callback() ;

            }) ;
    
            socket.disconnect() ;

            delete me.socket ;

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

        if(socket){

            socket.emit(event , ...params) ;
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