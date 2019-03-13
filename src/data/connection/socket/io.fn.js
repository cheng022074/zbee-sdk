/**
 * 
 * 基于 socket.io 标准进行开发
 * 
 * @param {string} url socket.io 连接地址
 * 
 * @param {object} config socket.io 连接配置
 * 
 * @require socket.io-client
 * 
 */

const IO = require('socket.io-client') ;

function main(url , options){

    return new Socket(url , options) ;
}

const EventEmitter = require('events') ;

class Socket{

    constructor(url , options){

        let me = this,
            onException =() => reconnect.call(me);

        me.url = url ;

        me.options = options ;

        createSocket.call(me) ;

        let {
            socket
        } = me ;

        socket.once('connect' , () => {

            socket.once('error' , onException) ;

            socket.once('disconnect' , onException) ;

        }) ;
    }

    get connected(){

        let {
            socket
        } = this ;

        return socket.connected ;
    }

    emit(event , ...args){

        let me = this,
        {
            connected,
            socket
        } = me;

        if(connected){

            socket.emit(event , ...args) ;
        
        }else{

            me.on('connect' , () => me.emit(event , ...args)) ;
        }
    }

    on(event , fn){

        this.socket.on(event , fn) ;
    }
}

function reconnect(){

    let me = this;

    if(me.connected){

        me.socket.close() ;
    }

    return createSocket.call(me) ;
}

function createSocket(){

    let me = this,
    {
        url,
        options
    } = me;

    return  me.socket = IO(url , options) ;
}
