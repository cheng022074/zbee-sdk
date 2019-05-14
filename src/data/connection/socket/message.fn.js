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
                from,
                to
            },
            data
        } ;
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