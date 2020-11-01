
/**
 * 
 * 基于 axios 通用客户端单向数据通道
 * 
 * @import Channel from data.channel
 * 
 * @import on from event.listener.add
 * 
 * @import off from event.listener.remove
 * 
 * @import axios
 * 
 * @class
 * 
 */

class main extends Channel{

    constructor(receivers){

        super(receivers) ;

        me.receiveConnected() ;

        me.cancelTokens = {} ;
    }

    send(params){

        return super.send(null , params) ;
    }

    processSendParams(params){

        return params ;
    }

    processReceiveData(data){

        return data ;
    }

    doSend({
        type,
        id,
        params
    }){

        let me = this,
        {
            cancelTokens
        } = me;

        switch(type){

            case 'send':

                cancelTokens[id] = axios(me.processSendParams(params) , (isSuccess , data , response) => {

                    if(isSuccess){

                        me.receiveReplyValue({
                            id,
                            value:me.processReceiveData(data , response)
                        }) ;
                    }

                }) ;

            break ;

            case 'cancel-send':

                if(cancelTokens.hasOwnProperty(id)){

                    cancelTokens[id]() ;

                    delete cancelTokens[id] ;
                }
        }
    }


}