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

    onMessageSend(address , message){

        console.log(message) ;

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

            if(isDefined(data)){

                try{

                    data = JSON.parse(JSON.stringify(data)) ;
                
                }catch(err){
    
                    data = undefined ;
                }
            }

            this.acceptMessage({
                ...address,
                data
            }) ;
        }
    }
 }