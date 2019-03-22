/**
 * 
 * 发送消息
 * 
 * @import getCenter from message.center
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} message 消息配置
 * 
 * 
 */

let center = getCenter() ;

if(isString(message)){

    center.receive({
        to:message
    }) ;

}else if(isObject(message)){

    let {
        from
    } = message;

    if(from){

        let {
            name
        } = this ;

        message.from = `${name}::${from}` ;
    }

    center.receive(message) ;
}