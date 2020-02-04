
/**
 * 
 * 连接
 * 
 * @import create from data.message.create
 * 
 * @import equals from data.equals
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 */

let {
    proxy,
    sendMessages
} = this,
{
    message,
    promise
} = create(address , params , {
    ...config,
    processive:true
}),
{
    id
} = message,
messages = Object.values(sendMessages);

for(sendMessage of messages){

    if(equals(message , sendMessage)){

        return ;
    } 
}

sendMessages[id] = message ;

proxy.call('onSend' , message) ;

return promise ;