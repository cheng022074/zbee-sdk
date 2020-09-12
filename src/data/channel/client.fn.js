
/**
 * 
 * 数据通道客户端基本实现
 * 
 * @import Observable from mixin.observable
 * 
 * @import is.defined
 * 
 * @import on from event.listener.add
 * 
 * @import off from event.listener.remove
 * 
 * @class
 * 
 */

 class main extends mixins({
    mixins:[
        Observable
    ]
}){

    getEventNameBySendParams(params){

        return JSON.stringify(params) ;
    }

    getEventNameByReceiveParams(){
        
    }

    processSendParams(params){

        return params ;
    }

    processReceiveData(){

        return {} ;
    }

    send(params , isReturnData = false){

        let me = this,
            eventName = me.getEventNameBySendParams(params),
            dataEvent = eventName,
            errorEvent = `${eventName}-error`,
            fireDataEvent = (...params) => {

                let receiveData = me.processReceiveData(...params) ;

                let receiveDataEvent = me.getEventNameByReceiveParams(receiveData) ;

                if(isDefined(receiveDataEvent) && receiveDataEvent !== dataEvent){

                    return ;
                }

                me.fireEvent(dataEvent , receiveData) ;

            },
            fireErrorEvent = data => me.fireEvent(errorEvent , data);

        params = me.processSendParams(params) ;

        if(isReturnData){

            return new Promise((resolve , reject) => {

                let listeners = {
                    [dataEvent](client , data){

                        off(me , listeners) ;
                    
                        resolve(data) ;
                    },
                    [errorEvent](client , data){

                        off(me , listeners) ;

                        reject(data) ;
                    }
                } ;

                on(me , listeners) ;

                me.doSend(params , fireDataEvent , fireErrorEvent) ;

            }) ;
        }

        me.doSend(params , fireDataEvent , fireErrorEvent) ;
    }

    doSend(){


    }

 }