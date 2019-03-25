
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
 */

 let {
    toAction,
    from,
    payload
 } = message ;

if(toAction in target){

    let result = await target[toAction](payload , message) ;

    if(from && isDefined(result)){

        send({
            to:from,
            replyPayload:payload,
            payload:result
        }) ;
    }
}