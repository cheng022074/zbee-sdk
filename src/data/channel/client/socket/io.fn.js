
/**
 * 
 * 基于 Socket.io 数据通道客户端实现
 * 
 * @import Channel from ....client value
 * 
 * @import Observable from mixin.observable
 * 
 * @import createSocket from socket.io
 * 
 * @import add from event.listener.add
 * 
 * @import from from array.from
 * 
 * @class
 * 
 */


class main extends Channel{

    doSend({
        event,
        params,
        ...options
    } , fireDataEvent , fireErrorEvent){

        getSocket.call(this , {
            ...options,
            fireDataEvent,
            fireErrorEvent
        }).emit(event , ...from(params)) ;
    }
}

const sockets = new Map() ;

function getSocket({
    url,
    path = '/socket.io',
    fireDataEvent,
    fireErrorEvent,
    ...options
}){

    let key = `${url}:${path}` ;

    if(!sockets.has(key)){

        let socket = createSocket({
            url,
            path,
            ...options
        });

        add(socket , {
            data:fireDataEvent,
            connect_error:fireErrorEvent
        });

        sockets.set(key , socket) ;
    }

    return sockets.get(key) ;
}