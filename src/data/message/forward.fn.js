
/**
 * 
 * 消息登记转发消息通道
 * 
 * @param {object} message 消息
 * 
 * @param {data.message.Channel} channel 消息通道
 * 
 */

let {
    channels
 } = message,
 {
    rootAddress
 } = channel;

 return channels.push(rootAddress) ;