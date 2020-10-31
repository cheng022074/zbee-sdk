
/**
 * 
 * 窗口之间的数据通道
 * 
 * @import Channel from data.channel
 * 
 * @import on from event.listener.add
 * 
 * @import off from event.listener.remove
 * 
 * @class
 * 
 */

class main extends Channel{

    constructor(name , {
        window,
        receivers
    }){

        super(receivers) ;

        let me = this;

        on(window , 'message' , ({
            data,
            ports
        }) => {

            if(data === name){

                let port = ports[0] ;

                port.onmessage = ({
                    data
                }) => me.receive(data) ;

                port.postMessage(`${name}-ready`) ;

                me.receivePort = port ;
            }
        }) ;

        me.window = window ;

        me.name = name ;
    }

    doConnect(){

        let me = this,
        {
            name,
            window
        } = me,
        {
            port1,
            port2
        } = new MessageChannel();

        port1.onmessage = ({
            data
        }) => {

            if(data === `${name}-ready`){

                me.receiveConnectSuccess() ;
            
            }else{

                me.receive(data) ;
            }
        } ;

        me.sendPort = port1 ;

        window.postMessage(name , '*' , [
            port2
        ]) ;
    }

    doDisconnect(){


    }

    doSend(data){

        this.sendPort.postMessage(data) ;
    }

    doReply(data){

        this.receivePort.postMessage(data) ;
    }
}