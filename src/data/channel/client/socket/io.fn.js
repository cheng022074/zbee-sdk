
/**
 * 
 * 基于 Socket.io 数据通道客户端实现
 * 
 * @import Channel from ..client value
 * 
 * @import Observable from mixin.observable
 * 
 * @import create from socket.io
 * 
 * @class
 * 
 */

class main extends mixins({
    extend:Channel,
    mixins:[
       Observable
    ]
}){

    async emit(url , path , event , params){

        let socket = getSocket(url , path) ;
    
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
            off = () => {
    
                socket.off('connect' , onConnect) ;
    
                socket.off('connect_error' , onError) ;
    
                socket.once('connect_timeout' , onError) ;
    
            };
    
            socket.once('connect' , onConnect) ;
    
            socket.once('connect_error' , onError) ;
    
            socket.once('connect_timeout' , onError) ;
    
        }) ;
    }
}

const io = require('socket.io-client');

const sockets = new Map() ;

function getSocket(url , path = '/socket.io'){

    let key = `${url}:${path}` ;

    if(!sockets.has(key)){

        sockets.set(key , io(url , {
            path,
            forceNew: true,
            transports: [
                'websocket'
            ]
        })) ;
    }

    return sockets.get(key) ;
}