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

        let me = this ;

        me.socketTimeoutTimer.restart() ;

        me.acceptMessage(data) ;
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

            delete me.$restartCount ;

            delete me.$isTryStartMode ;
        }
    }

    doStart(){

        let me = this,
        {
            WebSocket,
            socketURL,
            isSocketClosd,
            isSocketConnecting,
            isSocketConnected
        } = me,
        socket;

        return new Promise((resolve , reject) =>{

            if(isSocketClosd){

                socket = new WebSocket(socketURL) ;
            
            }else{

                socket = me.socket ;
            }

            if(isSocketClosd || isSocketConnecting){

                add(socket , {
                    open:resolve,
                    once:true
                }) ;
            }

            if(isSocketClosd){

                add(socket , {
                    open:'onSocketOpen',
                    close:'onSocketClose',
                    message:'onSocketMessage',
                    scope:me
                }) ;
        
                me.socket = socket ;

                resolve() ;
            
            }else if(isSocketConnected || isSocketConnecting){

                resolve() ;
            
            }else{

                reject() ;
            }

        }) ;
    }

    doEnd(){

        let me = this,
            {
                socket,
                isSocketConnected,
                isSocketClosing,
                isSocketClosd
            } = me;

        return new Promise((resolve , reject) =>{

            if(isSocketConnected || isSocketClosing){

                add(socket , {
                    close:resolve,
                    once:true
                }) ;
            }

            if(isSocketConnected){

                me.deactivate() ;
    
                me.$doClose = true ;
    
                socket.close() ;

                resolve() ;
            
            }else if(isSocketClosd || isSocketClosing){

                resolve() ;
            
            }else{

                reject() ;
            }

        }) ;
    }

    get isSocketConnected(){

        return isState.call(this , 1) ;
    }

    get isSocketConnecting(){

        return isState.call(this , 0) ;
    }

    get isSocketClosing(){

        return isState.call(this , 2) ;
    }

    get isSocketClosd(){

        return isState.call(this , 3) ;
    }

    start(){

        return doMethod.call(this , 'start') ;
    }

    end(){

        return doMethod.call(this , 'end') ;
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

 function isState(state){

    let {
        socket
    } = this ;

    if(!socket && state === 3){

        return true ;
    }

    return socket && socket.readyState === state ;
 }

 async function doMethod(name){

    let me = this,
        {
            isTryStartMode,
            socketTimeoutTimer
        } = me;

    if(isTryStartMode){

        return ;
    }

    socketTimeoutTimer[name]() ;

    await me[`do${capitalize(name)}`]() ;
 }

