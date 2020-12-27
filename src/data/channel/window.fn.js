
/**
 * 
 * 窗口之间的数据通道
 * 
 * @import Channel from data.channel value
 * 
 * @import on from event.listener.add
 * 
 * @import off from event.listener.remove
 * 
 * @class
 * 
 */

class main extends Channel{

    constructor(name , target , receivers){

        super(receivers) ;

        let me = this;

        on(window , 'message' , ({
            data,
            ports
        }) => {

            let {
                receivePort
            } = me ;

            if(data === `${name}-connect` && !receivePort){

                let port = ports[0] ;

                port.onmessage = ({
                    data
                }) => me.receiveData(data) ;

                port.postMessage(`${name}-connected`) ;

                me.receivePort = port ;

                me.connect() ;
            
            }else if(data === `${name}-disconnect` && receivePort){

                let {
                    receivePort
                } = me ;

                receivePort.postMessage(`${name}-disconnected`) ;

                receivePort.close() ;

                delete me.receivePort ;

                me.disconnect() ;

            }
        }) ;

        me.target = target ;

        me.name = name ;
    }

    doConnect(){

        let me = this,
        {
            name,
            target
        } = me,
        {
            port1,
            port2
        } = new MessageChannel();

        port1.onmessage = ({
            data
        }) => {

            if(data === `${name}-connected`){

                me.receiveConnected() ;
            
            }else if(data === `${name}-disconnected`){

                me.sendPort.close() ;

                delete me.sendPort ;

                me.receiveDisconnected() ;

            }else{

                me.receiveData(data) ;
            }
        } ;

        me.sendPort = port1 ;

        target.postMessage(`${name}-connect` , '*' , [
            port2
        ]) ;
    }

    doDisconnect(){

       this.target.postMessage(`${name}-disconnect` , '*') ;
    }

    doSend(data){

        this.sendPort.postMessage(data) ;
    }

    doReply(data){

        this.receivePort.postMessage(data) ;
    }
}