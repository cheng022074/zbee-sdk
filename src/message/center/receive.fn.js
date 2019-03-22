
/**
 * 
 * 接收消息
 * 
 * @import parse from message.address.parse
 * 
 * @param {object} message 消息
 * 
 * @param {string} [message.from] 消息来源地址
 * 
 * @param {string} message.to 消息发送地址
 * 
 * @param {mixed} [message.payload] 消息负荷
 * 
 */

 let result = parse(to) ;

 if(result){

    let {
        address:toAddress,
        action:toAction
    } = result;

    this.registerAddress(toAddress).receive({
        toAction,
        payload,
        from
    }) ;
 }
