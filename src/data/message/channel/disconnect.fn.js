
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
 * @import disconnect from data.message.processive.disconnect
 * 
 * @import is from data.message.processive.disconnect.is
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
        autoCreate:false,
        wrapProcessivePromise:false
    }) ;

if(message){

    let {
        body
    } = message,
    {
        id
    } = body;

    disconnect(id) ;

    if(is(id)){
    
        if(body.cancel !== true){
    
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
}

return Promise.resolve() ;