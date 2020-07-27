
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
 * @import createSocket from socket.io
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

    async send(url , path , event , params){

        getSocket.call(this , url , path).emit(event , ...params) ;

        return true ;
    }
}

const sockets = new Map() ;

function getSocket(url , path = '/socket.io'){

    let key = `${url}:${path}` ;

    if(!sockets.has(key)){

        let {
            socketOptions = {}
        } = this ;

        sockets.set(key , createSocket({
            url,
            path,
            ...socketOptions
        })) ;
    }

    return sockets.get(key) ;
}