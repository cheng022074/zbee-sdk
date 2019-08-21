/**
 * 
 * 基于标准 WebSocket 进行开发
 * 
 * @import Connection from data.connection.socket.standard value
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @import removeAll from event.listener.remove.all 
 * 
 * @require ws
 * 
 * @class
 * 
 */

 const WebSocket = require('ws') ;

 class main extends Connection{

    doStart(){

        let me = this,
            {
                socketURL
            } = me;

        return new Promise((resolve , reject) => {

            let socket = new WebSocket(socketURL);
    
            add(socket , {
                connect(){

                    me.socket = socket ;

                    removeAll(socket) ;

                    add(socket , {
                        message(data){

                            me.acceptMessage(data) ;
                        },
                        error(){

                            me.restart() ;
                        }
                    }) ;

                    resolve() ;
                },
                error(){

                    removeAll(socket) ;

                    reject() ;
                }
            }) ;

        }) ;
    }

    doEnd(){

        return new Promise(callback =>{

            let me = this,
            {
                socket
            } = me ;

            add(socket , 'close' , () =>{

                removeAll(socket) ;

                callback() ;

            } , {
                once:true
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

            socket.send(message) ;
        }
    }
 }