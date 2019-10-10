
/**
 * 
 * 管理多个 WebSocket 推送器开关
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @once
 * 
 */

 const processQueue = [];

 let isProcessorStarted = false;

 class main{

    connect(socket){

        todo(socket , 'connect') ;
    }

    disconnect(socket){

       todo(socket , 'disconnect') ;
    }
 }

 function todo(socket , action) {
    
    processQueue.push({
        socket,
        action
    }) ;

    start() ;
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

        if(isDisconnected || isConnected){

            processQueue.shift() ;

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

        add(socket , 'lostconnect' , () =>{

            remove(socket , {
                disconnect:doProcessing,
                connect:doProcessing
            }) ;

            doProcessing() ;

        } , {
            once:true
        }) ;
    
    }else{

        isProcessorStarted = false ;
    }
 }