
/**
 * 
 * 针对 Socket.io 再封装
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @import environment from environment.name value
 * 
 * @param {object} config socket.io 配置
 * 
 */

 const IO = require('socket.io-client') ;

 const browserRe = /browser$/ ;

 class main{

    constructor({
        url,
        path
    }){

        let me = this ;

        me.url = url ;

        me.path = path ;

        me.connect() ;

        me.connected = false ;

        if(browserRe.test(environment)){

            add(window , 'offline' , 'onOffline' , {
                scope:me
            }) ;

            add(window , 'visibilitychange' , 'onVisibilityChange' , {
                scope:me
            })
        }
    }

    onOffline(){

        this.reconnect() ;
    }

    onVisibilityChange(){

        let me = this ;

        if(document.visibilityState){

            me.connect() ;
        
        }else{

            me.disconnect() ;
        }
    }

    async reconnect(){

        let me = this ;

        if(me.reconnecting !== true){

            me.reconnecting = true ;

            await me.disconnect() ;

            await me.connect() ;

            delete me.reconnecting ;
        }
    }

    connect(){

        let me = this ;

        if(!me.connected){

            createSocket.call(me) ;

            return new Promise(callback => add(me , 'connect' , () => callback(true) , {
                once:true
            })) ;
        }

        return Promise.resolve(false) ;
    }

    disconnect(){

        let me = this ;

        if(me.connected && me.disconnecting !== true){

            me.disconnecting = true ;

            me.socket.disconnect() ;

            return new Promise(callback => add(me , 'disconnect' , () => {

                delete me.disconnecting ;

                callback(true) ;

            } , {
                once:true
            })) ;
        }

        return false ;
    }

    onConnect(){

        let me = this ;

        me.connected = true ;

        me.fireEvent('connect') ;
    }

    onError(){

        let me = this ;

        me.connected = false ;

        me.fireEvent('error') ;
    }

    onDisconnect(){

        let me = this ;

        if(me.connected){

            me.connected = false ;

            me.fireEvent('disconnect') ;

        }else{

            me.connect() ;
        }
    }

    emit(event , ...params){

        let {
            socket
        } = this ;

        if(socket.connected){
    
            socket.emit(event , ...params) ;
    
            return true ;
        
        }
    
        return await new Promise(callback => {
    
            const onConnect = () => {
    
                off() ;
    
                socket.emit(event , ...params) ;
    
                callback(true) ;
            },
            onError = () => {
    
                off() ;
    
                callback(false) ;
            },
            off = () =>  remove(me , {
                connect:onConnect,
                error:onError
            }) ;

            add(me , {
                connect:{
                    fn:onConnect,
                    once:true
                },
                error:{
                    fn:onError,
                    once:true
                }
            }) ;
    
        }) ;
    }
 }

 function createSocket(){

    let me = this,
    {
        url,
        path
    } = me ;

    add(me.socket = IO(url , {
        path,
        forceNew: true,
        transports: [
            'websocket'
        ],
        reconnection:false
    }) , {
        connect:'onConnect',
        error:'onError',
        disconnect:'onDisconnect',
        scope:me
    }) ;
 }