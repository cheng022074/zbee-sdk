
/**
 * 
 * 发送消息
 * 
 * @import createMessage from message
 * 
 * @import get from .static.storage
 * 
 * @param {string} address 发送消息到达的地址
 * 
 * @param {mixed} data 数据
 * 
 * 
 */

address = get(address) ;

if(address){

    let me = this,
    {
        plugin
    } = me;

    plugin.send(address , createMessage(data , me , address)) ;
}