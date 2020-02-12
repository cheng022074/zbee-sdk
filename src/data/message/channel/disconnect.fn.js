
/**
 * 
 * 连接
 * 
 * @import get from data.message.get
 * 
 * @import send from .send.body scoped
 * 
 * @import add from event.listener.add
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 */

let me = this,
    message = get(me , address , params , {
        ...config,
        processive:true,
        autoCreate:false
    }) ;

if(message){

    let {
        body
    } = message;

    body.cancel = true ;

    send(body) ;

    return new Promise(resolve => add(me , 'messageend' , resolve , {
        once:true
    })) ;
}

return Promise.resolve() ;