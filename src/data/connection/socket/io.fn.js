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

class Socket{

    constructor(url , options = {}){

        let me = this;

        me.url = url ;

        me.options = options ;

        me.socket = IO(url , {
            transports: [
                'websocket',
                'polling'
            ],
            ...options
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

            const emitFn = () => me.emit(event , ...args) ;

            socket.once('connect' , emitFn) ;

            socket.once('reconnect' , emitFn) ;
        }
    }

    on(event , fn){

        this.socket.on(event , fn) ;
    }
}