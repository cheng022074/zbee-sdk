
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
 * @import isObject from is.object.simple
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
    }

    connect(){

        let me = this,
        {
            connectState
        } = me;

        switch(connectState){

            case 0:
            case 1:
            
                return ;

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

                break ;

            case 2:
            case 3:
        }
    }

    generateCallID(){

        return generate(Date.now()) ;
    }

    receiveConnectSuccess(){

        this.receiveConnectState(2) ;
    }

    receiveConnectFailure(){

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

                me.fireEvent('connect_error') ;
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
    
                    me.receiveSendInfo(options) ;
    
                    break ;
    
                case 'reply':
    
                    me.receiveReplyValue(options) ;
            }
        }
    }

    async receiveSendInfo({
        id,
        name,
        params
    }){

        let me = this,
        {
            receivers
        } = me;

        if(receivers.hasOwnProperty(name)){

            me.reply(id , await receivers[name](params)) ;
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

    async send(name , params , {
        returnMode = 'single'
    }){

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

            switch(returnMode){

                case 'single':

                    return await new Promise(callback => on(me , id , data => callback(data) , {
                        once:true
                    })) ;

                case 'multi':

                    return id ;
            }

        }

        return await new Promise(callback => on(me , 'connect' , async () => callback(await call(name , params , options)) , {
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