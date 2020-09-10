
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
 * @class
 * 
 */

class main extends Channel{

    doSend({
        url,
        path,
        event,
        params
    } , fireDataEvent , fireErrorEvent){

        await getSocket.call(this , {
            url,
            path,
            fireDataEvent,
            fireErrorEvent
        }).emit(event , ...params) ;

        return true ;
    }
}

const sockets = new Map() ;

function getSocket({
    url,
    path = '/socket.io',
    fireDataEvent,
    fireErrorEvent
}){

    let key = `${url}:${path}` ;

    if(!sockets.has(key)){

        let me = this,
        {
            socketOptions = {}
        } = me,
        socket = createSocket({
            url,
            path,
            ...socketOptions
        });

        sockets.set(key , new Promise((resolve , reject) => add(socket , {
            data:fireDataEvent,
            connect:resolve,
            connect_error(){

                fireErrorEvent() ;

                reject() ;
            }
        }))) ;
    }

    return sockets.get(key) ;
}