
/**
 * 
 * Socket 消息机
 * 
 * @import .socket.subscriber.store
 * 
 * @import .socket.subscriber.model
 * 
 * @param {mixed} options Socket 初始化配置
 * 
 * @class
 * 
 */

 class main{

    constructor(options){

        let me = this ;

        me.init(options) ;

        me.subscribers = new Map() ;

        me.addRemoteMessageListener(msg =>{

            let me = this,
            {
                subscribers
            } = this,
            result = me.processMessage(msg);

            subscribers.forEach((subscriber , params) =>{

                if(me.doMatchParams(msg , params)){
    
                    subscriber.accept(result) ;
                }

            }) ;
    
        }) ;
    }

    init(options){

    }

    addRemoteMessageListener(doRemoteMessageListener){


    }

    processMessage(msg){

        return msg ;
    }

    doMatchParams(msg , params){

        return false ;
    }

    createSubscriber({
        type = 'store',
        ...params
    } = {}){

        let {
            subscribers
        } = this;

        return me.subscribers.set(params , include(`data.connection.socket.subscriber.${type}`)(params)) ;
    }

    removeSubscriber(params){


    }

    doSubscribe(params){

    }

    subscribe(params){

        let me = this ;

        me.doSubscribe() ;

        return me.createSubscriber(params) ;
    }

    doUnsubscribe(params){

    }

    unsubscribe(params){

        let me = this ;

        me.unsubscribe(params) ;

        me.removeSubscriber(params) ;
    }
 }