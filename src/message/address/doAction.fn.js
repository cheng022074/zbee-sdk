
/**
 * 
 * 执行绑定对象相关函数
 * 
 * @import is.defined
 * 
 * @import send from .send scoped
 * 
 * @param {mixed} target 作用对象
 * 
 * @param {object} message 消息
 * 
 * @param {string} message.toAction 接收消息方法
 * 
 * @param {string} [message.from] 接收消息方法
 * 
 * @param {string} [message.payload] 消息负荷
 * 
 * @param {string} [message.replyPayload]
 * 
 */

if(toAction in target){

    let result = await target[method](payload , replyPayload) ;

    if(from && isDefined(result)){

        send({
            to:from,
            replyPayload:payload,
            payload:result
        }) ;
    }
}