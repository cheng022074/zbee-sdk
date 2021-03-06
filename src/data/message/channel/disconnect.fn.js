
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
 * @import remove from event.listener.remove
 * 
 * @import disconnect from data.message.processive.disconnect scoped
 * 
 * @import is from data.message.processive.disconnect.is scoped
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 */

let me = this,
    message ;

if(isString(address)){

    message = get(me , address , params , {
        ...config,
        processive:true,
        autoCreate:false
    }) ;

}else if(isObject(address)){

    message = address ;
}

if(message){

    let {
        body
    } = message,
    {
        id
    } = body;

    disconnect(id) ;

    if(is(id)){

        remove(me , [
            `messagestart-${id}`,
            `message-${id}`,
            `messageend-${id}`,
            `messageerror-${id}`,
        ]) ;
    
        body.cancel = true ;
    
        send(body) ;
    
        return new Promise(resolve => add(me , `messageend-${id}` , resolve , {
            once:true
        })) ;
        
    }
}

return Promise.resolve() ;