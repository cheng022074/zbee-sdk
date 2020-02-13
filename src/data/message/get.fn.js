
/**
 * 
 * 获取消息
 * 
 * @import create from .create scoped
 * 
 * @import equals from data.equals
 * 
 * @import isObject from is.object.simple
 * 
 * @import copy from object.copy
 * 
 * @import isPromise from is.promise.processive
 * 
 * @import createPromise from promise.create
 * 
 * @param {data.message.Channel} channel 消息通道对象
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} params 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 * @param {boolean} [config.reconnection = false] 在发送失败后是否重发 
 * 
 * @param {string} [config.fromAddress] 发送消息地址
 * 
 * @param {boolean} [config.processive = false] 是否为持续消息
 * 
 * @param {boolean} [config.autoCreate = true] 当前 autoCreate 设置为 true 时，如果消息不存在时则创建
 * 
 * @param {boolean} [config.wrapProcessivePromise = true] 在已有持续推送机外，是否包裹一层持续推送机
 * 
 */

let me = this,
{
   rootAddress,
   messages
} = channel ;

fromAddress = rootAddress ;

messages = Object.values(messages) ;

for(let message of messages){

    let {
        body,
        promise
    } = message,
    {
        from,
        to,
        params:messageParams,
        processive:messageProcessive
    } = body ;

    if(
        from === fromAddress &&
        to === address &&
        equals(params , messageParams) &&
        messageProcessive === processive
    ){

        let result = {
            created:false,
            body
        } ;

        if(isPromise(promise) && wrapProcessivePromise){

            result.promise = createPromise((resolve , reject) => {

                promise.then(resolve).catch(reject) ;

                return resolve ;

            } , resolve => promise.cancel(resolve)) ;
        
        }else{

            result.promise = promise ;
        }

        return result ;
    }
}

if(autoCreate){

    return {
        ...create(channel , address , params , {
            reconnection,
            fromAddress,
            processive
        }),
        created:true
    } ;
}