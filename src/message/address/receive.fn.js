
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
     target,
     messages
 } = this ;

 if(target){

    doAction(target , message) ;
 
}else{

    messages.push(message) ;
}