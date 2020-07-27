
/**
 * 
 * 基于 Socket.io 数据通道客户端实现
 * 
 * @import Channel from ....client value
 * 
 * @import Observable from mixin.observable
 * 
 * @import create from socket.io
 * 
 * @import createSocket from socket.io
 * 
 * @import add from event.listener.add
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

    send(url , path , event , ...params){

        getSocket.call(this , url , path).emit(event , ...params) ;

        return true ;
    }

    onData(socket , ...params){

        let me = this ;

        me.fireEvent('data' , me.processReceiveData(...params) , me.processReceiveParams(...params)) ;
    }

    processReceiveData(){

        return {} ;
    }

    processReceiveParams(){

        return {} ;
    }
}

const sockets = new Map() ;

function getSocket(url , path = '/socket.io'){

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

        add(socket , 'data' , 'onData' , {
            scope:me
        }) ;

        sockets.set(key , socket) ;
    }

    return sockets.get(key) ;
}