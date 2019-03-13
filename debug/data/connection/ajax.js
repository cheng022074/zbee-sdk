/**
 * 
 * 针对 WebSocket 进行调试
 * 
 * @import ajax from data.connection.ajax
 * 
 */

ajax('http://118.31.105.13/pushMessage/pushMsg' , {
    params:{
        appId:"OK!",
        userId:"陈治文",
        msg:JSON.stringify({
            operation:'insert'
        })
    }
}) ;