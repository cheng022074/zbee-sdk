/**
 * 
 * 基于 socket.io 标准进行开发
 * 
 * @import observable from mixin.observable
 * 
 * @import Connection from data.connection.socket value
 * 
 * @require socket.io-client
 * 
 * @class
 * 
 */

 const IO = require('socket.io-client') ;

 class main extends mixins({
     extend:Connection,
     mixins:[
        observable
     ]
 }){

    constructor({
        socket,
        listeners = {},
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
                onReConnect,
                onConnect
            } = me ;

        me.onConnect = onConnect.bind(me) ;

        socket = me.socket = IO(socketURL , {
            'force new connection': true,
            transports: [
                'websocket',
                'polling'
            ],
            ...socketOptions
        }) ;

        me.addListeners(listeners) ;

        me.state ='connecting' ;

        socket.on(messageEventName , acceptMessage.bind(me)) ;

        socket.once('connect' , me.onConnect) ;

        socket.on('reconnect' , onReConnect.bind(me)) ;

        socket.on('reconnect_error' , () => me.state = 'connecting') ;

        socket.on('subresp' , data =>{

            console.log('订阅确认' , data) ;

        }) ;
    }

    set state(value){

        let me = this ;

        me.fireEvent('state' , value) ;

        me.$state = value ;
    }

    get state(){

        return this.$state ;
    }

    onConnect(){

        this.state = 'connected' ;
    }

    onReConnect(){

        let me = this ;

        me.resubscribes() ;

        me.state = 'connected' ;
    }

    reopen(){

        let me = this ;

        me.close() ;

        me.open() ;
    }

    open(){

        let me = this,
        {
            socket,
            state,
            onReConnect
        } = me ;

        if(state === 'connecting'){

            return ;
        }

        socket.once('connect' , onReConnect.bind(me)) ;

        socket.open() ;
    }

    close(){

        let me = this,
        {
            socket,
            state,
            onConnect
        } = me ;

        if(state === 'connecting'){

            socket.un('connect' , onConnect) ;
        }

        socket.once('disconnect' , () => me.state = 'disconnect') ;

        socket.close() ;
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

        console.log('发起订阅' , ...args) ;

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