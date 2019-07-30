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
                resubscribes
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
        } = me;

        socket.emit(event , ...params) ;
    
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