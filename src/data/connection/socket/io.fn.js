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

    initialize({
        socket
    }){

        let {
            url:socketURL,
            options:socketOptions
        } = socket,
        me = this;

        me.socketURL = socketURL ;

        me.socketOptions = socketOptions ;
    }
    
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
            }),
            initSocket = () => {

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
            };
    
            add(socket , {
                connect(){

                    initSocket() ;

                    resolve() ;
                },
                connect_error(){

                    initSocket() ;

                    reject() ;
                }
            }) ;

        }) ;
    }

    doEnd(){

        return new Promise(callback =>{

            let me = this,
            {
                socket
            } = me ;

            socket.once('disconnect' , callback) ;
    
            socket.disconnect() ;

            removeAll(socket) ;

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
            socket,
            isConnecting,
            isDisconnect
        } = me ;

        if(!isConnecting && !isDisconnect){

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