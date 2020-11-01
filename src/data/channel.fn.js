
/**
 * 
 * 数据通信 
 * 
 * @import Observable from mixin.observable
 * 
 * @import generate from id.generate
 * 
 * @import on from event.listener.add
 * 
 * @import off from event.listener.remove
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @class
 * 
 */

class main extends mixins({
    mixins:[
        Observable
    ]
}){

    constructor(receivers = {}){

        let me = this ;

        me.connected = false ;

        me.receivers = receivers ;

        me.connectState = 3 ;

        me.cancelSendFunctions = {} ;
    }

    connect(){

        let me = this,
        {
            connectState
        } = me;

        switch(connectState){

            case 2:

                on(me , 'disconnect' , () => me.connect() , {
                    once:true
                }) ;

                break ;

            case 3:

                me.connectState = 0 ;

                me.doConnect() ;
        }
    }

    disconnect(){

        let me = this,
        {
            connectState
        } = me;

        switch(connectState){

            case 0:

                on(me , 'connect' , () => me.disconnect() , {
                    once:true
                }) ;

                break ;

            case 1:

                me.connectState = 2 ;

                me.doDisconnect() ;
        }
    }

    generateCallID(){

        return generate(Date.now()) ;
    }

    receiveConnected(){

        this.receiveConnectState(2) ;
    }

    receiveDisconnected(){

        this.receiveConnectState(3) ;
    }

    receiveConnectState(state){

        let me = this ;

        me.connectState = state ;

        switch(state){

            case 2:

                me.connected = true ;

                me.fireEvent('connect') ;

                break ;

            case 3:

                me.fireEvent('disconnect') ;
        }

    }

    receiveData(data){

        if(isObject(data)){

            let {
                type,
                ...options
            } = data,
            me = this ;
    
            switch(type){
    
                case 'send':
    
                    me.receiveSendInstruction(options) ;
    
                    break ;
    
                case 'reply':
    
                    me.receiveReplyValue(options) ;

                case 'cancel-send':

                    me.receiveCancelSendData(options) ;
            }
        }
    }

    receiveCancelSendData({
        id
    }){

        let {
            cancelSendFunctions
        } = this ;

        if(cancelSendFunctions.hasOwnProperty(id)){

            cancelSendFunctions[id]() ;

            delete cancelSendFunctions[id] ;
        }
    }

    async receiveSendInstruction({
        id,
        name,
        params
    }){

        let me = this,
        {
            receivers,
            cancelSendFunctions
        } = me;

        if(receivers.hasOwnProperty(name)){

            let reply = value => me.reply(id , value),
                result = receivers[name](params , reply) ;

            if(isFunction(result)){

                cancelSendFunctions[id] = result ;
                
            }else{

                reply(await result) ;
            }
        }
    }

    receiveReplyValue({
        id,
        value
    }){

        me.fireEvent(id , value) ;
    }

    reply(id , value){

        this.doReply({
            type:'reply',
            id,
            value
        }) ;
    }

    cancelSend(id){

        let me = this ;

        me.doSend({
            type:'cancel-send',
            id
        }) ;

        off(me , id) ;
    }

    async send(name , params , callback){

        let me = this,
        {
            connected
        } = me ;

        if(connected){

            let id = me.generateCallID() ;

            me.doSend({
                type:'send',
                id,
                name,
                params
            }) ;

            if(isFunction(callback)){

                on(me , id , data => callback(data)) ;

                return id ;
            }

            return await new Promise(resolve => on(me , id , data => {

                me.cancelSend(id) ;

                resolve(data) ;

            } , {
                once:true
            })) ;

        }

        return await new Promise(resolve => on(me , 'connect' , async () => resolve(await call(name , params , options)) , {
            once:true
        })) ;
    }

    doSend(data){


    }

    doReply(data){


    }

    doConnect(){


    }

    doDisconnect(){

    }
}