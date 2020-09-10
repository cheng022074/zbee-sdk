
/**
 * 
 * 数据通道客户端基本实现
 * 
 * @import Observable from mixin.observable
 * 
 * @class
 * 
 */

 class main extends mixins({
    mixins:[
        Observable
    ]
}){

    getEventNameByParams(params){

        return JSON.stringify(params) ;
    }

    processSendParams(params){

        return params ;
    }

    processReceiveData(data){

        
    }

    send(params , isReturnData = false){

        let me = this,
            eventName = me.getEventNameByParams(params),
            dataEvent = eventName,
            errorEvent = `${eventName}-error`,
            fireDataEvent = (...params) => me.fireEvent(dataEvent , me.processReceiveData(...params)),
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