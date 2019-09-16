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

        this.resendMessages = [] ;
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

    onCreateSubscriber(){

        let me = this,{
            resendMessages
        } = me,
        messages = from(resendMessages);

        resendMessages.length = 0 ;

        for(let message of messages){

            me.send(message) ;
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

            address.getResendMessages = address.getResendMessages || default_get_resend_messages ;

            let {
                to,
                getResendMessages
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

                let {
                        reSendMessages
                    } = this;

                reSendMessages.push(...from(getResendMessages(address , me.acceptMessage(address)))) ;
            }
        }
    }
 }

 function default_get_resend_messages(message , subscribers){

    if(subscribers.length !== 0){

        return message ;
    }
 }