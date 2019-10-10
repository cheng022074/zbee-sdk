
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

    connect(socket){

        todo(socket , 'connect') ;
    }

    disconnect(socket){

       todo(socket , 'disconnect') ;
    }
 }

 function todo(socket , action) {

    if(socket instanceof Socket()){

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

        doProcessing() ;
    }
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

            remove(socket , {
                lostconnect:doProcessing,
                disconnect:doProcessing,
                connect:doProcessing
            }) ;
        }

        if(isDisconnected || isConnected){

            processQueue.shift() ;

            previousSocket = socket ;

            add(socket , 'lostconnect' , doProcessing) ;

            switch(action){

                case 'connect':

                    if(isDisconnected){

                        add(socket , 'connect' , doProcessing , {
                            once:true
                        }) ;

                        socket.connect() ;
                    
                    }else{

                        doProcessing() ;
                    }

                    break ;

                case 'disconnect':

                    if(isConnected){

                        add(socket , 'disconnect' , doProcessing , {
                            once:true
                        }) ;

                        socket.disconnect() ;
                                            
                    }else{

                        doProcessing() ;
                    }
            }
        
        }else if(isDisconnecting){

            add(socket , 'disconnect' , doProcessing , {
                once:true
            }) ;
        
        }else if(isConnecting){

            add(socket , 'connect' , doProcessing , {
                once:true
            }) ;
        }
    
    }else{

        previousSocket = null ;

        isProcessorStarted = false ;
    }
 }