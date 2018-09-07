/**
 * 
 * 接收消息并处理
 * 
 * @import isMain from connection.message.is.main
 * 
 * @import reply from connection.message.reply
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import emptyFn from function.empty
 * 
 * @param {mixed} receiver 接收者对象
 * 
 * @param {string} implementName 接收操作函数名称
 * 
 * @param {string} replyName 回复消息操作函数名称
 * 
 * @param {mixed} actionName 执行消息包操作函数名称
 * 
 */

let actionFn ;

if(isString(actionName)){

    actionFn = include(actionName) ;

}else if(isFunction(actionName)){

    actionFn = actionName ;

}else{

    actionFn = emptyFn() ;
}

include(implementName)(receiver).then(async (message) =>{

    if(isMain(message)){
        
        include(replyName)(receiver , reply(message , await actionFn(message))) ;
    
    }

}) ;