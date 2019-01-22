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
 * @import convert from json.convert
 * 
 * @param {string} address 发送消息到达的地址
 * 
 * @param {string} method 方法
 * 
 * @param {mixed} data 数据
 * 
 */

address = get(address) ;

if(address){

    let me = this,
    {
        plugin
    } = me,
    message = createMessage(me , address , method , convert(data)),
    result = await plugin.send(message) ;

    if(isDefined(result)){

        message.returnData = convert(result) ;
    }

    return message ;
}