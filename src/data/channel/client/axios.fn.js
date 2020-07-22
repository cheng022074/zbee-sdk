
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

    send(params){

        let me = this ;

        return axios(me.processSendParams(params)).then(({
            data
        }) => {

            me.fireEvent('data' , data , params) ;

            return true ;

        }) ;
    }

    processSendParams(params){

        return params ;
    }
}