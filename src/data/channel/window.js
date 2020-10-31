
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

const { delete } = require("request-promise");

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

            if(data === `${name}-connect`){

                let port = ports[0] ;

                port.onmessage = ({
                    data
                }) => me.receive(data) ;

                port.postMessage(`${name}-connected`) ;

                me.receivePort = port ;
            
            }else if(data === `${name}-disconnect`){

                let {
                    receivePort
                } = me ;

                receivePort.postMessage(`${name}-disconnected`) ;

                receivePort.close() ;

                delete me.receivePort ;

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

            if(data === `${name}-connected`){

                me.receiveConnected() ;
            
            }else if(data === `${name}-disconnected`){

                me.sendPort.close() ;

                delete me.sendPort ;

                me.receiveDisconnected() ;

            }else{

                me.receive(data) ;
            }
        } ;

        me.sendPort = port1 ;

        window.postMessage(`${name}-connect` , '*' , [
            port2
        ]) ;
    }

    doDisconnect(){

       window.postMessage(`${name}-disconnect` , '*') ;
    }

    doSend(data){

        this.sendPort.postMessage(data) ;
    }

    doReply(data){

        this.receivePort.postMessage(data) ;
    }
}