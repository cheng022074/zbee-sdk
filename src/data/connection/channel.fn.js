/**
 * 
 * Socket 通信
 * 
 * @import Connection from data.connection value
 * 
 * @import add from event.listener.add
 * 
 * @import generate from id.generate
 * 
 * @import MultiPromise from promise.multi value
 * 
 * @import equals from data.equals
 * 
 * @import remove from array.remove.index
 * 
 * @import createPort from data.connection.channel.port
 * 
 * @class
 * 
 */

 const pushOffRe = /^push\-off\-(.+)$/ ;

 class main extends Connection{

    constructor({
        receiver,
        sender,
        ...options
    }){

        super({
            ...options,
            subscriber:createPort,
            rules:[{
                test:'^.+$',
                use(command){
        
                    return {
                        extraParams:{
                            command
                        }
                    } ;
                }
            }]
        }) ;

        let me = this ;

        me.doAcceptMessage(receiver) ;

        me.sender = sender ;

        me.commands = {} ;

        me.registerSubscribers = {} ;
    }

    doAcceptMessage(receiver){

        let me = this ;

        add(receiver , 'message' , data => me.acceptMessage(data)) ;
    }

    doSendMessage(sender , message){

        sender.postMessage(message) ;
    }

    unregisterSubscriber(id){

        let {
            registerSubscribers
        } = this;
        
        registerSubscribers.get(id).destroy() ;

        registerSubscribers.delete(id) ;
    }

    registerSubscriber(id , subscriber){

        let {
            registerSubscribers
        } = this ;

        registerSubscribers.set(id , subscriber) ;
    }

    processMessage(data){

        let {
            command
        } = data,
        result = command.match(pushOffRe);

        if(result){

            connection.unregisterSubscriber(id) ;
        
        }else{

            return data ;
        }
    }

    validateMessage({
        params
    },{
        command
    }){

       return params.command === command ;
    }

    call(command , params){

        let me = this,
            {
                sender
            } = me;

        return new Promise((resolve , reject) =>{

            let id = generate('call-') ;

            me.subscribeOnce(id).then(data =>{

                let {
                    type
                } = data ;
    
                switch(type){
    
                    case 'resolve':
    
                        resolve(data.result) ;
    
                        break ;
    
                    case 'reject':
    
                        reject(data.error) ;
                }
    
                me.removeReplyId(command , params) ;
    
            }) ;
    
            me.doSendMessage(sender , {
                command:`call-${command}`,
                data:{
                    id,
                    params
                }
            }) ;
        }) ;
    }

    pushOn(command , params){

        let me = this,
            {
                sender
            } = me,
            id = generate('push-');

        me.doSendMessage(sender , {
            command:`call-${command}`,
            data:{
                id,
                params
            }
        }) ;

        return me.subscribe(id , {
            fn(data){

                let {
                    type
                } = data ;

                switch(type){

                    case 'resolve':

                        resolve(data.result) ;

                        break ;

                    case 'reject':

                        reject(data.error) ;
                }
            }
        }) ;
    }

    pushOff(id){

        let me = this ;

        me.unsubscribe(id) ;

        me.doSendMessage(sender , {
            command:`push-off-${id}`
        }) ;
    }

    reject(id , error){

        let me = this,
            {
                sender
            } = me ;

        me.doSendMessage(sender , {
            command:id,
            data:{
                type:'reject',
                error
            }
        }) ;
    }

    resolve(id , result){

        let me = this,
            {
                sender
            } = me ;

        me.doSendMessage(sender , {
            command:id,
            data:{
                type:'resolve',
                result
            }
        }) ;
    }

    function(command , fn , scope){

        this.subscribe(`call-${command}` , {
            fn,
            scope
        }) ;
    }



 }

 