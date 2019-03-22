import { isObject } from "util";

/**
 * 
 * 发送消息
 * 
 * @import center from message.center
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object|string} message 消息配置
 * 
 * 
 */

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