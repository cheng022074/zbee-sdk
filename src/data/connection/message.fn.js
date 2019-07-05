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
 * @import is.defined
 * 
 * @import assign from object.assign
 * 
 * @singleton
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
                address:to
            },
            data:{
                from,
                to,
                data
            }
        } ;
    }

    get subscriberListeners(){

        return {
            ...super.subscriberListeners,
            send:'onMessageSend'
        } ;
    }

    subscribe(name , options = {}){

        return super.subscribe(name , assign(options , {
            params:{
                address:name
            }
        })) ;
    }

    onMessageSend(address , message){

        this.acceptMessage(message) ;
    }

    send(address , data){

        if(isString(address)){

            address = {
                to:address
            } ;
        }

        if(isObject(address)){

            if(!address.hasOwnProperty('data')){

                address = {
                    ...address,
                    data
                } ;
            }

            this.acceptMessage(address) ;
        }
    }
 }