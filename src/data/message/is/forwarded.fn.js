
/**
 * 
 * 判断消息是否已经被指定消息通道转发过
 * 
 * @param {object} message 消息
 * 
 * @param {data.message.Channel} channel 消息通道
 * 
 * @return {boolean} 如果消息是被消息通道转发过则返回 true , 否则返回 false 
 * 
 */

 let {
    channels
 } = message,
 {
    rootAddress
 } = channel;

 return channels.includes(rootAddress) ;