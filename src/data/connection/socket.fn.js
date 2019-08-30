

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

 class main extends Connection{

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

        me.initialize(url , options) ;
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