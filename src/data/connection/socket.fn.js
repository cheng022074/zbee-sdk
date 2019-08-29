

/**
 * 
 * Socket 通信
 * 
 * @import Connection from data.connection value
 * 
 * @import observable from mixin.observable
 * 
 * @import add from event.listener.add
 * 
 * @class
 * 
 */

 const sockets = [],
       eventEmitter = new (require('events'))();


 function ensureSocketsReady(){

    let isReady = true ;

    for(let socket of sockets){

        if(socket.socket)

        if(!(socket.isConnected || socket.isDisconnectd)){

            isReady = false ;

            break ;
        }
    }

    if(isReady){

        eventEmitter.emit('ready') ;
    }

    return isReady ;

 }

 class main extends Connection{

    static register(socket){

        /*add(socket.socket , {
            open:ensureSocketsReady,
            close:ensureSocketsReady
        }) ;*/

        sockets.push(socket) ;
    }

    static ready(fn){

        if(ensureSocketsReady()){

            fn() ;
        
        }else{

            eventEmitter.removeAllListeners('ready') ;

            eventEmitter.once('ready' , fn) ;
        }
    }

    constructor({
        socket,
        ...superOptions
    }){

        super(superOptions) ;

        let me = this ;

        let {
            url,
            options = {}
        } = socket ;

        console.log('前' , me.eventEmitter) ;

        me.initialize(url , options) ;

        main.register(me) ;

        console.log('后' , me.eventEmitter) ;
    }

    initialize(url , options){


    }

    get isConnected(){

        return isState.call(this , 1) ;
    }

    get isConnecting(){

        return isState.call(this , 0) ;
    }

    get isDisconnecting(){

        return isState.call(this , 2) ;
    }

    get isDisconnectd(){

        return isState.call(this , 3) ;
    }

    validateMessage({
        params:baseParams
    },{
        params:equalParams
    }){

        let names = Object.keys(equalParams) ;

        for(let name of names){

            if(baseParams[name] !== equalParams[name]){

                return false ;
            }
        }

        return true ;
    }
 }

 function isState(state){

    let {
        socket
    } = this ;

    if(!socket){

        return state === 3 ;
    }

    return socket.readyState === state ;
 }