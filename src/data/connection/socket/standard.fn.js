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

        me.endTryStartMode() ;

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

            me.beginTryStartMode() ;
        }
    }

    onSocketMessage(data){

        this.acceptMessage(data) ;
    }

    beginTryStartMode(){

        let me = this ;

        if(!me.isTryStartMode){

            me.$tryStartCount = 0 ;

            me.$isTryStartMode = true ;

            me.end() ;
        
        }else{

            me.tryStart() ;
        }
    }

    get isTryStartMode(){

        return this.$isTryStartMode === true ;
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

            me.endTryStartMode() ;
        }
    }

    endTryStartMode(){

        let me = this ;

        if(me.isTryStartMode){

            delete me.$tryStartCount ;

            delete me.$isTryStartMode ;
        }
    }

    doStart(){

        let me = this,
        {
            WebSocket,
            socketURL,
            isDisconnectd
        } = me;

        if(isDisconnectd){

            add(me.socket = new WebSocket(socketURL) , {
                open:'onSocketOpen',
                close:'onSocketClose',
                message:'onSocketMessage',
                scope:me
            }) ;

            return true ;
        
        }

        return false ;
    }

    doEnd(){

        let me = this,
            {
                socket,
                isConnected
            } = me;

        if(isConnected){

            me.deactivate() ;

            me.$doClose = true ;

            socket.close() ;

            return true ;

        }

        return false ;
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
            isSocketConnected
        } = me ;

        if(isSocketConnected){

            socket.send(message) ;
        }
    }
 }

 function doMethod(name){

    let me = this,
        {
            isTryStartMode
        } = me;

    if(isTryStartMode){

        return ;
    }

    me[`do${capitalize(name)}`]() ;
 }

