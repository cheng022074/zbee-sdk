/**
 * 
 * 发送消息
 * 
 * @param {Message} message 消息
 * 
 */

let {
    listens
} = this,
toAddress = message.to.address ;

if(listens.hasOwnProperty(toAddress)){

    return listens[toAddress](message) ;
}