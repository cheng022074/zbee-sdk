
/**
 * 
 * 基于 Axios 数据通道客户端实现
 * 
 * @import Channel from ..client value
 * 
 * @class
 * 
 */

const axios = require('axios');

class main extends Channel{

    doSend(params , fireDataEvent , fireErrorEvent){
        
        axios(params)
            .then(({
                data
            }) => fireDataEvent(data))
            .catch(({
                status,
                data
            }) => fireErrorEvent({
                status,
                data
            }));
    }

    processSendParams(params){

        return params ;
    }

    processReceiveData(data){

        return data ;
    }
}