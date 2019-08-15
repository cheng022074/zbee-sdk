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

    constructor({
        socket,
        ...options
    }){

        super(options) ;

        let {
            url:socketURL,
            options:socketOptions
        } = socket,
        me = this,
        socket = me.socket =  IO(socketURL , {
            autoConnect:false,
            forceNew: true,
            transports: [
                'websocket',
                'polling'
            ],
            ...socketOptions
        }),
        onConnect = get('onConnect' , me);

        socket.on('connect' , onConnect) ;

        socket.on('reconnect' , onConnect) ;

        socket.on('reconnecting' , get('onReconnecting' , me)) ;

        socket.on('close' , get('onClose' , me)) ;

        socket.on(messageEventName , get('acceptMessage' , me)) ;

        socket.on('subresp' , data =>{

            console.log('订阅确认' , data) ;

        }) ;
    }

    set state(state){

        let me = this,
        {
            $state
        } = me ;

        if($state !== state){

            me.$state = state ;

            me.fireEvent('statechange' , state , $state) ;
        }
    }

    get state(){

        let {
            $state
        } = this ;

        if(!$state){

            return 'disconnect' ;
        }

        return $state ;
    }

    get isConnected(){

        let {
            socket
        } = this ;

        return socket.connected ;
    }

    get isDisconnected(){

        let {
            socket
        } = this ;

        return socket.disconnected ;
  
    }

    get isConnecting(){

        return this.state === 'connecting' ;
    }

    get isDisconnect(){

        return this.state === 'disconnect' ;
    }

    get isDisconnecting(){

        return this.state === 'disconnecting' ;
    }

    doStart(){

        let {
            socket
        } = this ;

        socket.connect() ;
    }

    doEnd(){

        let {
            socket
        } = this ;

        socket.disconnect() ;
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

        let me = this ;

        me.state = 'connected' ;

        me.activate() ;
    }

    onReconnecting(){

        this.state = 'reconnecting' ;
    }

    onDisconnect(){

        this.state = 'disconnect' ;
    }

    open(){

        let me = this,
        {
            socket,
            state
        } = me ;

        return new Promise(callback =>{

            switch(state){

                case 'connecting':
                case 'connected':

                    callback() ;
    
                    return ;
            }
    
            socket.once('connect' , () =>{

                me.onReConnect() ;

                callback() ;

            }) ;
    
            socket.open() ;

        }) ;
    }

    close(){

        let me = this,
        {
            socket,
            state,
            onConnect
        } = me ;

        return new Promise(callback =>{

            switch(state){

                case 'disconnecting':
                case 'disconnect':

                    callback() ;

                    return ;
            }
    
            if(state === 'connecting'){
    
                socket.un('connect' , onConnect) ;
            }

            me.state = 'disconnecting' ;
    
            socket.once('disconnect' , () => {

                me.state = 'disconnect' ;

                callback() ;

            }) ;
    
            socket.close() ;

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