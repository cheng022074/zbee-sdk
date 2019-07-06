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

    validateMessage({
        name
    },{
        to
    }){

        for(let toRe of to){

            if(toRe.test(name)){

                return true ;
            }
        }

        return false ;
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

                subscriber.acceptMessage(me.processData(message)) ;
            
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
                ...message
            } = address ;

            to = from(to) ;

            let {
                length
            } = to ;

            for(let i = 0 ; i < length ; i ++){

                let toName = to[i] ;

                if(toName instanceof RegExp){

                    continue ;
                }

                if(exactAddressRe.test(toName)){

                    to[i] = new RegExp(toName) ;
                
                }else{

                    to[i] = new RegExp(`^${toName}(?:<[^<>]+>)?$`) ;
                }
            }

            address.to = to ;

            let me = this,
                addresses = me.acceptMessage(address),
                {
                    notSendMessages
                } = me;

            for(let toRe of to){

                let isServiced = false ;

                for(let {
                    name
                } of addresses){

                    if(toRe.test(name)){

                        isServiced = true ;

                        break ;
                    }
                }

                if(!isServiced){

                    notSendMessages.push({
                        ...message,
                        to:toRe
                    }) ;
                }
            }
        }
    }
 }