
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

            let {
                op,
                data:result
            } = data ;

            if(op.code === 'Y'){

                me.fireEvent('data' , result , params) ;
            
            }else{

                me.fireEvent('dataerror' , op , params) ;
            }

            return true ;

        }) ;
    }

    processSendParams(params){

        return params ;
    }
}