/**
 * 
 * 基于标准 WebSocket 进行开发
 * 
 * @import createTimer from timer
 * 
 * @param {string} url socket 连接地址
 * 
 * @param {object} config socket 连接配置
 * 
 */

function main(url , options = {}){

    return new Socket(url , options) ;
}

const EventEmitter = require('events') ;

class Socket extends EventEmitter{

    constructor(url , options){

        super() ;

        let me = this ;

        me.url = url;

        me.options = options ;

        let {
            timeout = 20000,
            parse
        } = options ;

        me.timer = createTimer(timeout) ;

        createSocket.call(me) ;

        let {
            socket
        } = me ;

        socket.addEventListener('message' , ({
            data
        }) =>{

            let {
                event,
                params
            } = parse(data);

            me.emit(event , params) ;

        }) ;

        let onException =() => reconnect.call(me) ;

        me.once('connect' , () => {

            socket.addEventListener('error' , onException) ;

            socket.addEventListener('close' , onException) ;

        }) ;
    }

    get connected(){

        let {
            socket
        } = this ;

        return socket.readyState === 1 ;
    }

    emit(event , ...args){

        let me = this,
        {
            connected,
            options,
            socket
        } = me,
        {
            stringify
        } = options;

        if(connected){

            socket.send(stringify(event , args)) ;
        
        }else{

            me.on('connect' , () => me.emit(event , ...args)) ;
        }
    }

    on(eventName , fn){

        this.addListener(eventName , fn) ;
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
        socket = me.socket = new WebSocket(url),
        {
            timer
        } = me,
        onConnectError = () => me.emit('connect_error');

    timer.start() ;

    timer.on('timeout' , () => me.emit('connect_timeout')) ;

    socket.addEventListener('open' , () =>{

        socket.removeEventListener('error' , onConnectError) ;

        timer.end() ;

        me.emit('connect') ;

    }) ;

    socket.addEventListener('error' , onConnectError) ;

    return me.socket ;
}