
/**
 * 
 * 回复消息
 * 
 * @param {data.Message} message 消息
 * 
 */

 let me = this,
    {
        rootAddress
    } = me;

 me.proxy.call('doSend' , {
     ...message,
     channels:[
        rootAddress
     ]
 }) ;