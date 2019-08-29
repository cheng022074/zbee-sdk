/**
 * 
 * 标准推送
 * 
 * @import Connection from data.connection.socket value
 * 
 * @import join from url.join
 * 
 * @import get from function.get
 * 
 * @import createTimer from timer
 * 
 * @import add from event.listener.add
 * 
 * @import removeAll from event.listener.remove.all
 * 
 * @import capitalize from string.capitalize
 * 
 * @class
 * 
 * 
 */

 class main extends Connection{

    initialize(url , {
        path,
        reconnection = true,
        reconnectionAttempts = Infinity,
        reconnectionDelay = 1000,
        timeout = 20000,
        autoConnect = true
    }){

        let me = this ;
        
        if(path){

            url = join(url , path) ;
        }

        me.socketURL = url ;

        me.socketReconnection = reconnection ;

        me.socketReconnectionCount = reconnectionAttempts ;

        me.socketReconnectionDelay = reconnectionDelay ;

        me.socketTimeoutTimer = createTimer({
            duration:timeout,
            autoStart:false,
            listeners:{
                timeend:'onSocketTimeout',
                scope:me
            }
        }) ;

        if(autoConnect){

            me.start() ;
        }
    }

    onSocketTimeout(){

        let me = this ;

        if(me.socketReconnection){

            me.beginTryStartMode() ;
        }
    }

    onSocketOpen(){

        let me = this ;

        me.socketTimeoutTimer.end() ;

        me.endTryStart() ;

        me.activate() ;
    }

    onSocketClose(){

        let me = this,
        {
            socketReconnection,
            socket,
            $doClose
        } = me;

        removeAll(socket) ;

        delete me.$doClose ;

        delete me.socket ;

        if(socketReconnection && !$doClose){

            me.beginTryStart() ;
        }
    }

    onSocketMessage(data){

        this.acceptMessage(data) ;
    }

    beginTryStart(){

        let me = this ;

        if(!me.$isTryStart){

            me.$tryStartCount = 0 ;

            me.$isTryStart = true ;

            me.end() ;
        
        }else{

            me.tryStart() ;
        }
    }

    tryStart(){

        let me = this,
        {
            $tryStartCount,
            socketReconnectionCount,
            socketReconnectionDelay
        } = me;

        if($tryStartCount <= socketReconnectionCount){

            me.$tryStartCount ++ ;

            setTimeout(get('doStart' , me) , socketReconnectionDelay) ;
        
        }else{

            me.endTryStart() ;
        }
    }

    endTryStart(){

        let me = this ;

        delete me.$tryStartCount ;

        delete me.$isTryStart ;
        
    }

    doStart(){

        let me = this,
        {
            WebSocket,
            socketURL,
            isDisconnectd
        } = me;

        return new Promise(resolve =>{

            if(isDisconnectd){

                add(me.socket = new WebSocket(socketURL) , {
                    open:'onSocketOpen',
                    close:'onSocketClose',
                    message:'onSocketMessage',
                    scope:me
                }) ;
    
                add(me.socket , 'open' , () => resolve(true) , {
                    once:true
                }) ;
    
            }else{
    
                resolve(false) ;
            }

        }) ;
    }

    doEnd(){

        let me = this,
            {
                socket,
                isConnected
            } = me;

        return new Promise(resolve =>{

            if(isConnected){

                add(socket , 'close' , () => resolve(true) , {
                    once:true
                }) ;

                me.deactivate() ;
    
                me.$doClose = true ;
    
                socket.close() ;
            
            }else{

                resolve(false) ;
            }
    
        }) ;
    }

    start(){

        let me = this,
        {
            socketTimeoutTimer
        } = me ;

        socketTimeoutTimer.start() ;

        return doMethod.call(me , 'start') ;
    }

    end(){

        let me = this,
        {
            socketTimeoutTimer
        } = me ;

        socketTimeoutTimer.end(false) ;

        return doMethod.call(me , 'end') ;
    }

    send(message){

        let me = this,
        {
            socket,
            isConnected
        } = me ;

        if(isConnected){

            socket.send(message) ;
        }
    }
 }

 async function doMethod(name){

    let me = this;

    me.endTryStart() ;

    await me[`do${capitalize(name)}`]() ;
 }

