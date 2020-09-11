
/**
 * 
 * 数据通道客户端基本实现
 * 
 * @import Observable from mixin.observable
 * 
 * @import is.defined
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
            eventName = me.getEventNameByParams(params),
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

                me.on({
                    [dataEvent]:resolve,
                    [errorEvent]:reject
                }) ;

                me.doSend(params , fireDataEvent , fireErrorEvent) ;

            }) ;
        }

        me.doSend(params , fireDataEvent , fireErrorEvent) ;
    }

    doSend(){


    }

 }