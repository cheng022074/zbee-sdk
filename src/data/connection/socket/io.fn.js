/**
 * 
 * 基于 socket.io 标准进行开发
 * 
 * @import Connection from data.connection.socket value
 * 
 * @require socket.io-client
 * 
 * @class
 * 
 */

 const IO = require('socket.io-client') ;

 class main extends Connection{

    constructor({
        socket,
        ...options
    }){

        super(options) ;

        let {
            url:socketURL,
            options:socketOptions
        } = socket ;

        let me = this,
            {
                messageEventName,
                acceptMessage,
                resubscribes,
                onConnect
            } = me ;

        socket = me.socket = IO(socketURL , {
            'force new connection': true,
            transports: [
                'websocket',
                'polling'
            ],
            ...socketOptions
        }) ;

        socket.on(messageEventName , acceptMessage.bind(me)) ;

        socket.on('reconnect' , resubscribes.bind(me)) ;

        socket.once('connect' , onConnect.bind(me)) ;

        me.firstConnected = false ;
    }

    onConnect(){

        console.log('connect') ;

        this.firstConnected = true ;
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
            firstConnected,
            socket
        } = me;

        if(firstConnected){

            if(socket.connected){

                socket.emit(event , ...params) ;
            }

        }else{

            socket.once('connect' , () => me.emit(event , ...params)) ;
        }
    }

    doSubscriberOpen(subscriber , ...args){

        let me = this,
        {
            subscribeEventName
        } = me ;

        me.emit(subscribeEventName , ...args) ;
    }

    doSubscriberClose(subscriber , ...args){

        let me = this,
        {
            unsubscribeEventName
        } = me ;

        me.emit(unsubscribeEventName , ...args) ;
    }
 }