
/**
 * 
 * socket 管理类
 * 
 * @import remove from array.remove.all
 * 
 * @once
 * 
 */

 const processQueue = [],
       processMode = new Map();

 class main{

    constructor(){

        this.isProcessorStarted = false ;
    }

    static start(socket){

        processQueue.push(socket) ;

        processMode.set(socket , 'start') ;

        this.startProcessor() ;
    }

    static end(socket){

        processQueue.push(socket) ;

        processMode.set(socket , 'end') ;

        this.startProcessor() ;
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

        let [
            socket
        ] = processQueue ;

        if(socket){

            let mode = processMode.get(socket) ;

            if(socket.isStableState){

                remove(processQueue) ;

                processMode.delete(socket) ;

                switch(mode){

                    case 'start':
    
                        if(!socket.isConnected){
    
                            // 启动
                        
                        }else{

                            // 直接进入下一个处理单元
                        }

                        break ;
    
                    case 'end':
    
                        if(socket.isConnected){
    
                            // 停止
                                                
                        }else{

                            // 直接进入下一个处理单元
                        }
                }
            
            }

            if(socket.isDisconnecting){

                //监听关闭事件
            
            }else if(socket.isConnecting){

                //监听连接事件
            }
        }
    }
 }