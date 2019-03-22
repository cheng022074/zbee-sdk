
/**
 * 
 * 接收消息
 * 
 * @import doAction from .doAction scoped
 * 
 * @param {Message} message 消息
 * 
 */

let {
    messages
} = this;

messages.push(Object.assign({} , message)) ;

doAction(message) ;