/**
 * 
 * 消息订阅
 * 
 * @import Connection from data.connection value
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
 * @import from from array.from
 * 
 * @singleton
 * 
 */

 const exactAddressRe = /^[^<>]+<[^<>]+>$/ ;

 class main extends Connection{

    constructor(){

        super({
            subscriber:createAddress
        }) ;

        this.notSendMessages = [] ;
    }

    processMessage(message){

        return message ;
    }

    processData(subscriber , {
        from,
        data
    }){

        return {
            from,
            data
        } ;
    }

    hasAddress(name){

        let {
            subscribers
        } = this ;

        return subscribers.has(name) ;
    }

    validateMessage({
        name
    },{
        to
    }){

        return to.test(name) ;
    }

    get subscriberListeners(){

        return {
            ...super.subscriberListeners,
            send:'onMessageSend'
        } ;
    }

    onMessageSend(address , message){

        this.send(message) ;
    }

    onCreateSubscriber(subscriber){

        let me = this , {
            notSendMessages
        } = me,
        messages = from(notSendMessages);

        notSendMessages.length = 0 ;

        for(let message of messages){

            if(me.validateMessage(subscriber , message)){

                subscriber.accept(me.processData(subscriber , message)) ;
            
            }else{

                notSendMessages.push(message) ;
            }
        }
    }

    send(address , data){

        if(isString(address)){

            address = {
                to:address,
                data
            } ;
        }

        if(isObject(address)){

            if(!address.hasOwnProperty('data')){

                address = {
                    ...address,
                    data
                } ;
            }

            let {
                to,
                validateServiced = default_validate_serviced,
                ...message
            } = address ;

            if(isString(to)){

                if(exactAddressRe.test(to)){

                    to = new RegExp(to) ;
                
                }else{
    
                    to = new RegExp(`^${to}(?:<[^<>]+>)?$`) ;
                }
            }

            if(to instanceof RegExp){

                address.to = to ;

                let me = this,
                    isServiced = validateServiced(me.acceptMessage(address)),
                    {
                        notSendMessages
                    } = me;

                if(!isServiced){

                    notSendMessages.push(address) ;
                }
            }
        }
    }
 }

 function default_validate_serviced(subscribers){

    return subscribers.length !== 0 ;
 }