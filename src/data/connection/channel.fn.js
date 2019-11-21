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
    }

    doAcceptMessage(receiver){

        let me = this ;

        add(receiver , 'message' , data => me.acceptMessage(data)) ;
    }

    doSendMessage(sender , message){

        sender.postMessage(message) ;
    }

    processMessage(data){

        return data ;

    }

    validateMessage({
        params
    },{
        command
    }){

       return params.command === command ;
    }

    getReplyId(command , params){

        let {
            commands
        } = this ;

        if(!commands.hasOwnProperty(command)){

            commands[command] = [] ;
        }

        let existsParamList = commands[command];

        for(let {
            id,
            params:existsParams
        } of existsParamList){

            if(equals(params , existsParams)){

                return id ;
            }
        }

        let id = generate('reply-') ;

        existsParamList.push({
            params,
            id
        }) ;

        return id ;
    }

    removeReplyId(command , params){

        let {
            commands
        } = this ;

        if(!commands.hasOwnProperty(command)){

            commands[command] = [] ;
        }

        let existsParamList = commands[command],
            index = 0;

        for(let {
            id,
            params:existsParams
        } of existsParamList){

            if(equals(params , existsParams)){

                remove(existsParamList , index) ;

                return true ;
            }

            index ++ ;
        }

        return false ;
    }

    call(command , params){

        let me = this,
            {
                sender
            } = me;

        return new Promise((resolve , reject) =>{

            let id = me.getReplyId(command , params) ;

            me.subscribe(id , {
                once:true,
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

                    me.removeReplyId(command , params) ;
                }
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
            } = me;

        return new MultiPromise((resolve , reject) =>{

            let id = me.getReplyId(command , params) ;

            me.subscribe(id , {
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

            me.doSendMessage(sender , {
                command:`call-${command}`,
                data:{
                    id,
                    params
                }
            }) ;

        }) ;
    }

    pushOff(command , params){

        let me = this ;

        me.unsubscribe(me.getReplyId(command , params)) ;

        me.removeReplyId(command , params) ;
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

 