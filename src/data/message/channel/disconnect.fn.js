
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
    message
} = create(address , params , {
    ...config,
    processive:true,
    received:true,
    id:false,
    promise:false
}),
messages = Object.values(sendMessages);

for({
    id,
    ...sendMessage
} of messages){

    if(equals(message , sendMessage)){

        proxy.call('onSend' , {
            id,
            cancel:true,
            ...sendMessage
        }) ;

        break ;
    }
}