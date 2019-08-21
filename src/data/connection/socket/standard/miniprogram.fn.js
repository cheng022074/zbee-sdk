/**
 * 
 * 基于小程序进行开发
 * 
 * @import Connection from data.connection.socket.standard value
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @import removeAll from event.listener.remove.all 
 * 
 * @class
 * 
 */

 class main extends Connection{

    doStart(){

        let me = this,
            {
                socketURL
            } = me;

        return new Promise((resolve , reject) => {

            let me = this,
                socket = wx.connectSocket({
                    url:socketURL
                });

            socket.onMessage(({
                data
            }) => me.acceptMessage(data)) ;

            socket.onError(() => {

                let {
                    state
                } = me ;

                if(state === 'connecting'){

                    reject() ;
                
                }else{

                    me.restart() ;
                }

            }) ;

            socket.onOpen(() =>{

                me.socket = socket ;

                resolve() ;

            }) ;

        }) ;
    }

    doEnd(){

        let me = this ;

        return new Promise(callback =>{

            let {
                socket
            } = me ;

            socket.onClose(() =>{

                callback() ;

            }) ;
    
            socket.close() ;

            delete me.socket ;

        }) ;
    }

    send(message){

        let me = this,
        {
            socket
        } = me ;

        if(socket){

            socket.send({
                data:message
            }) ;
        }
    }
 }