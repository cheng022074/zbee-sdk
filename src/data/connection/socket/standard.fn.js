/**
 * 
 * 基于标准 WebSocket 进行开发
 * 
 * @import Connection from data.connection.socket value
 * 
 * @import add from event.listener.add.once
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
            } = socket,
            {
                onConnect,
                onErrorEvent
            } = me;

        me.onConnect = onConnect.bind(me) ;

        me.onErrorEvent = onErrorEvent.bind(me) ;

        me.socketURL = socketURL ;

        me.createWebSocket() ;

        me.unsendMessages = [] ;
    }

    async createWebSocket(){

        let me = this,
        {
            socketURL,
            onConnect,
            onErrorEvent
        } = me ;

        await me.destroyWebSocket() ;

        me.state ='connecting' ;

        socket = me.socket = new WebSocket(socketURL) ;

        socket.addEventListener('open' , onConnect) ;

        socket.addEventListener('error' , onErrorEvent) ;

        add(socket , 'open' , onConnect) ;

        add(socket , 'error' , onErrorEvent) ;

        await new Promise(callback =>{

            const onOpen = () => {
    
                socket.removeEventListener('open' , onOpen) ; 
    
                callback() ;
    
             } ;
    
            socket.addEventListener('open' , onOpen) ;

        }) ;
    }

    destroyWebSocket(){

        let me = this,
        {
            socket,
            onConnect,
            onErrorEvent
        } = me;

        return new Promise(callback =>{

            if(socket){

                socket.removeEventListener('open' , onConnect) ;
    
                socket.removeEventListener('error' , onErrorEvent) ;

                me.state = 'disconnecting' ;
    
                const onClose = () => {
    
                   socket.removeEventListener('close' , onClose) ; 
    
                   me.state = 'disconnect' ;

                   callback() ;

                } ;
    
                socket.addEventListener('close' , onClose) ;
    
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

    onErrorEvent(){

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

        me.createWebSocket() ;
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

        this.destroyWebSocket() ;
    }
 }