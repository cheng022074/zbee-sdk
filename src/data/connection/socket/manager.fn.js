
/**
 * 
 * 管理多个 WebSocket 推送器开关
 * 
 * @import Socket from data.connection.socket
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @once
 * 
 */

 const processQueue = [];

 let isProcessorStarted = false,
     previousSocket;

 class main{

    isSocket(socket){

        return socket instanceof Socket() ;
    }

    isConnected(socket){

        return this.isSocket(socket) && socket.isConnected ;
    }

    connect(socket){

        todo.call(this , socket , 'connect') ;
    }

    disconnect(socket){

       todo.call(this , socket , 'disconnect') ;
    }
 }

 function todo(socket , action) {

    if(this.isSocket(socket)){

        processQueue.push({
            socket,
            action
        }) ;
    
        start() ;
    }
 }

 function start() {

    if(!isProcessorStarted){

        isProcessorStarted = true ;

        doSetTimeoutProcessing() ;
    }
 }

 function doSetTimeoutProcessing(){

    setTimeout(doProcessing , 0) ;
 }

 function doProcessing(){

    let [
        process
    ] = processQueue;

    if(process){
        
        let {
            socket,
            action
        } = process ;

        let {
            isDisconnected,
            isConnected,
            isDisconnecting,
            isConnecting
        } = socket;

        if(previousSocket){

            remove(previousSocket , {
                lostconnect:doSetTimeoutProcessing,
                disconnect:doSetTimeoutProcessing,
                connect:doSetTimeoutProcessing
            }) ;
        }

        if(isDisconnected || isConnected){

            previousSocket = socket ;

            processQueue.shift() ;

            add(socket , 'lostconnect' , doSetTimeoutProcessing) ;

            switch(action){

                case 'connect':

                    if(isDisconnected){

                        add(socket , 'connect' , doSetTimeoutProcessing , {
                            once:true
                        }) ;

                        socket.connect() ;
                    
                    }else{

                        doSetTimeoutProcessing() ;
                    }

                    break ;

                case 'disconnect':

                    if(isConnected){

                        add(socket , 'disconnect' , doSetTimeoutProcessing , {
                            once:true
                        }) ;

                        socket.disconnect() ;
                                            
                    }else{

                        doSetTimeoutProcessing() ;
                    }
            }
        
        }else if(isDisconnecting){

            add(socket , 'disconnect' , doSetTimeoutProcessing , {
                once:true
            }) ;
        
        }else if(isConnecting){

            add(socket , 'connect' , doSetTimeoutProcessing , {
                once:true
            }) ;
        }
    
    }else{

        previousSocket = null ;

        isProcessorStarted = false ;
    }
 }