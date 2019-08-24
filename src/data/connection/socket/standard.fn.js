
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

            me.beginRestartMode() ;
        }
    }

    onSocketOpen(){

        let me = this ;

        me.endTryStartMode() ;

        me.activate() ;
    }

    onSocketError(){

        me.close() ;
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

    onSocketMesasge(data){

        let me = this ;

        me.socketTimeoutTimer.restart() ;

        me.acceptMessage(data) ;
    }

    beginTryStartMode(){

        let me = this ;

        if(!me.isTryStartMode){

            me.$tryStartCount = 0 ;

            me.$isTryStartMode = true ;

            me.close() ;
        
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

            delete me.$restartCount ;

            delete me.$isTryStartMode ;
        }
    }

    doStart(){

        let me = this,
        {
            WebSocket,
            socketURL,
            socket
        } = me ;

        if(socket){

            return false;
        }

        let socket = new WebSocket(socketURL) ;

        add(socket , {
            open:'onSocketOpen',
            close:'onSocketClose',
            error:'onSocketError',
            message:'onMessage',
            scope:me
        }) ;

        me.socket = socket ;

        return true ;
    }

    doClose(){

        let me = this,
            {
                socket,
                $doClose,
                isConnected
            } = me;

        if(socket && !$doClose){

            if(isConnected){

                me.deactivate() ;
            }

            me.$doClose = true ;

            socket.close() ;

            return true ;
        }

        return false ;
    }

    isConnected(){

        let {
            socket
        } = this ;

        return socket && socket.readyState === 1 ;
    }

    start(){

        doMethod.call(this , 'start') ;
    }

    end(){

        doMethod.call(this , 'end') ;
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

 function doMethod(name){

    let me = this,
        {
            isTryStartMode,
            socketTimeoutTimer
        } = me;

    if(isTryStartMode){

        return ;
    }

    socketTimeoutTimer[name]() ;

    return me[`do${capitalize(name)}`]() ;
 }

