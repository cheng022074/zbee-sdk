
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

        return axios(params).then(({
            data
        }) => {

            this.fireEvent('data' , data , params) ;

            return true ;

        }) ;
    }
}