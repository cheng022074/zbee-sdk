/**
 * 
 * 基于 socket.io 标准进行开发
 * 
 * @import Socket from ....socket value
 * 
 * @require socket.io-client
 * 
 * @class
 * 
 */

 const IO = require('socket.io-client') ;

 class main extends Socket{

    init({
        url,
        options = {}
    }){

        let me = this,
            {
                messageEventName,
                acceptMessage
            } = me,
            socket = me.socket = IO(url , {
                transports: [
                    'websocket',
                    'polling'
                ],
                ...options
            }) ;

        socket.on(messageEventName , acceptMessage.bind(me)) ;
    }

    get connected(){

        let {
            socket
        } = this ;

        return socket.connected ;
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

    doEmit(socket , event , params){

        socket.emit(event , params) ;
    }

    emit(event , params){

        let me = this,
        {
            connected,
            socket
        } = me;

        if(connected){

            me.doEmit(socket , event , params) ;
        
        }else{

            const emitFn = () => me.emit(event , params) ;

            socket.once('connect' , emitFn) ;

            socket.once('reconnect' , emitFn) ;
        }
    }

    doSubscribe(params){

        let me = this,
        {
            subscribeEventName
        } = me ;

        me.emit(subscribeEventName , params) ;
    }

    doUnsubscribe(params){

        let me = this,
        {
            unsubscribeEventName
        } = me ;
        
        me.emit(unsubscribeEventName , params) ;
    }
 }