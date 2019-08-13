/**
 * 
 * 基于标准 WebSocket 进行开发
 * 
 * @import Connection from data.connection.socket value
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @class
 * 
 */

 class main extends Connection{

    constructor({
        socket
    }){

        let me = this,
            {
                url:socketURL
            } = socket;

        me.socketURL = socketURL ;

        me.createWebSocket() ;
    }

    async createWebSocket(){

        let me = this,
        {
            socketURL,
            onConnect,
            onError,
            onMessage
        } = me ;

        await me.destroyWebSocket() ;

        me.state ='connecting' ;

        socket = me.socket = new WebSocket(socketURL) ;

        add(socket , {
            open:onConnect,
            message:onMessage,
            error:onError,
            scope:me
        }) ;

        await new Promise(callback => add(socket , 'open' , callback , {
            once:true
        })) ;
    }

    destroyWebSocket(){

        let me = this,
        {
            socket,
            onConnect,
            onError,
            onMessage
        } = me;

        return new Promise(callback =>{

            if(socket){

                remove(socket , {
                    open:onConnect,
                    error:onError,
                    message:onMessage
                }) ;

                me.state = 'disconnecting' ;

                add(socket , 'close' , () =>{

                    me.state = 'disconnect' ;

                    callback() ;

                } , {
                    once:true
                }) ;
    
                socket.close() ;
    
                delete me.socket ;
            
            }else{

                callback() ;
            }

        }) ;
    }

    onConnect(){

        let me = this ;

        me.state = 'connected' ;

        me.resubscribes() ;
    }

    onMessage({
        data
    }){

        this.acceptMessage(data) ;
    }

    onError(){

        this.createSocket() ;
    }

    send(message){

        let {
            state,
            socket
        } = this ;

        if(state === 'connected'){

            socket.send(message) ;
        }
    }

    open(){

        let me = this,
        {
            state
        } = me ;

        switch(state){

            case 'connecting':
            case 'connected':

                return ;
        }

        return me.createWebSocket() ;
    }

    close(){

        let me = this,
        {
            state
        } = me;

        switch(state){

            case 'disconnecting':
            case 'disconnect':

                return ;
        }

        return this.destroyWebSocket() ;
    }
 }