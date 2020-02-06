
/**
 * 
 * 回复消息发送失败
 * 
 * @import reply from ..reply scoped
 * 
 * @param {data.Message} message 消息
 *
 */

reply({
    ...message,
    received:false
}) ;