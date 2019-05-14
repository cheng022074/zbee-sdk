/**
 * 
 * 消息订阅
 * 
 * @import Socket from data.connection.socket value
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import createAddress from data.connection.message.address
 * 
 */

 class main extends Socket{

    constructor(){

        super({
            subscriber:createAddress
        }) ;
    }

    processMessage({
        from,
        to,
        data
    }){

        return {
            params:{
                to
            },
            data:{
                from,
                to,
                data
            }
        } ;
    }

    get subscriberListeners(){

        let listeners = super.subscriberListeners ;

        listeners.send = 'onMessageSend' ;

        return listeners ;
    }

    onMessageSend(message){

        this.acceptMessage(message) ;
    }

    convertNameToSubscriberOptions(){

        return {} ;
    }

    send(address , data){

        if(isString(address)){

            address = {
                to:address
            } ;
        }

        if(isObject(address)){

            this.acceptMessage({
                ...address,
                data
            }) ;
        }
    }
 }