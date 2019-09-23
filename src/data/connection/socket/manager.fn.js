
/**
 * 
 * socket 管理类
 * 
 * @import remove from array.remove.all
 * 
 * @import add from event.listener.add
 * 
 * @once
 * 
 */

 const processQueue = [],
       processMode = new Map();

 class main{

    constructor(){

        let me = this ;

        me.isProcessorStarted = false ;

        me.processModeMap = new Map() ;

        me.processQueue = [] ;
    }

    static connect(socket){

        let me = this,
        {
            processModeMap,
            processQueue
        } = me ;

        processQueue.push(socket) ;

        processModeMap.set(socket , 'connect') ;

        me.startProcessor() ;
    }

    static disconnect(socket){

        let me = this,
        {
            processModeMap,
            processQueue
        } = me ;

        processQueue.push(socket) ;

        processModeMap.set(socket , 'disconnect') ;

        me.startProcessor() ;
    }

    startProcessor(){

        let me = this,
        {
            isProcessorStarted
        } = me ;

        if(!isProcessorStarted){

            me.isProcessorStarted = true ;

            me.doProcess() ;
        }

    }

    doProcess(){

        let me = this,
        {
            processModeMap,
            processQueue
        } = me,[
            socket
        ] = processQueue;

        if(socket){

            let mode = processModeMap.get(socket),
            {
                isDisconnected,
                isConnected
            } = socket;

            if(isDisconnected || isConnected){

                remove(processQueue) ;

                processMode.delete(socket) ;

                switch(mode){

                    case 'connect':
    
                        if(isDisconnected){
    
                            socket.connect() ;
                        
                        }else{

                            me.doProcess() ;

                            return ;
                        }

                        break ;
    
                    case 'disconnect':
    
                        if(isConnected){
    
                            socket.disconnect() ;
                                                
                        }else{

                            me.doProcess() ;

                            return ;
                        }
                }
            
            }

            if(socket.isDisconnecting){

                add(socket , {
                    disconnect:'doProcess',
                    scope:me
                }) ;
            
            }else if(socket.isConnecting){

                add(socket , {
                    connect:'doProcess',
                    scope:me
                }) ;
            }
        
        }else{

            me.isProcessorStarted = false ;
        }
    }
 }