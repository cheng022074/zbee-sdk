/**
 * 
 * 发送消息
 * 
 * @import createMessage from message
 * 
 * @import get from .storage
 * 
 * @import is.defined
 * 
 * @param {string} address 发送消息到达的地址
 * 
 * @param {object} options 数据
 * 
 * 
 */

address = get(address) ;

if(address){

    let me = this,
    {
        plugin
    } = me,
    message = createMessage(me , address , options),
    result = await plugin.send(message) ;

    if(isDefined(result)){

        message.returnData = result ;
    }

    return message ;
}