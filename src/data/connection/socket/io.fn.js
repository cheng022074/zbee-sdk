/**
 * 
 * 基于 socket.io 标准进行开发
 * 
 * @import Connection from data.connection.socket value
 * 
 * @import get from function.get
 * 
 * @require socket.io-client
 * 
 * @class
 * 
 */

 const IO = require('socket.io-client') ;

 class main extends Connection{

    initialize({
        socket,
        ...options
    }){

        let {
            url:socketURL,
            options:socketOptions
        } = socket,
        me = this;


        socket = me.socket =  IO(socketURL , {
            ...socketOptions,
            autoConnect:false,
            forceNew: true,
            reconnection:false,
            transports: [
                'websocket',
                'polling'
            ]
        });

        socket.on(me.messageEventName , get('acceptMessage' , me)) ;

        socket.on('connect_error' , () => me.restart()) ;

        socket.on('subresp' , data =>{

            console.log('订阅确认' , data) ;

        }) ;
    }
    
    doStart(){

        return new Promise((resolve , reject) => {

            let {
                socket
            } = this ;
    
            socket.connect() ;

            socket.once('connect' , resolve) ;

            socket.once('connect_error' , reject) ;

        }) ;
    }

    doEnd(){

        return new Promise(callback =>{

            let {
                socket
            } = this ;
    
            socket.disconnect() ;

            socket.once('disconnect' , callback) ;

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

    doSubscriberOpen(...args){

        let me = this,
        {
            subscribeEventName,
            socket,
            isDisconnect
        } = me ;

        if(!isDisconnect){

            socket.emit(subscribeEventName , ...args) ;
        }

    }

    doSubscriberClose(...args){

        let me = this,
        {
            isDisconnect,
            socket,
            unsubscribeEventName
        } = me ;

        if(!isDisconnect){

            socket.emit(unsubscribeEventName , ...args) ;
        }
    }
 }