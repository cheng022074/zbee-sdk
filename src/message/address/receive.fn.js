
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
    targets,
    messages
} = this;

messages.push(message) ;

for(let target of targets){

    doAction(target , message) ;
}