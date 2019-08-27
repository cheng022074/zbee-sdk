
/**
 * 
 * 小程序 socket 类实现
 * 
 * @import get from function.get
 * 
 * @class
 *
 */

 const EventEmitter = require('events') ;

 function onOpen(){

    this.emit('open') ;
 }

 function onMessage({
     data
 }){

    this.emit('message' , data) ;
 }

 function onError(){

    this.emit('error') ;
 }

 function onClose(){

    this.emit('close') ;
 }

 function on(name , fn){

    let me = this ;

    me.removeAllListeners(name) ;

    me.on(name , fn) ;
 }

 class main extends EventEmitter{

    constructor(url , protocols){

        super() ;

        let socket = wx.connectSocket({
            url,
            protocols
        }),
        me = this;

        socket.onOpen(get(onOpen , me)) ;

        socket.onMessage(get(onMessage , me)) ;

        socket.onError(get(onError , me)) ;

        socket.onClose(get(onClose , me)) ;

        me.socket = socket ;
    }

    get readyState(){

        return this.socket.readyState ;
    }

    set onopen(fn){

        on.call(this , 'open' , fn) ;
    }

    set onmessage(fn){

        on.call(this , 'message' , fn) ;
    }

    set onerror(fn){

        on.call(this , 'error' , fn) ;
    }

    set onclose(fn){

        on.call(this , 'close' , fn) ;
    }

    send(data){

        this.socket.send({
            data
        }) ;
    }

    close(){

        this.socket.close() ;
    }

 }