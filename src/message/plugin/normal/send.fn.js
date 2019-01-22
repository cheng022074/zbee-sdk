/**
 * 
 * 发送消息
 * 
 * @import is.defined
 * 
 * @param {Message} message 消息
 * 
 */

let {
    listens
} = this,
toAddress = message.to.address ;

if(listens.hasOwnProperty(toAddress)){

    let result = listens[toAddress](message) ;

    if(isDefined(result)){

        message.returnData = result ;

        message.from.callback(message) ;
    }

}