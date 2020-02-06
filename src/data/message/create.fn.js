/**
 * 
 * 创建一个消息
 * 
 * @import generate from id.generate
 * 
 * @import createPromise from promise.create
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
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
 * @param {boolean} [config.processive = false] 是否持续性连接
 * 
 */

 let me = this,
 {
    rootAddress
 } = channel,
 id = generate('message-');

 return {
     promise:createPromise((resolve , reject) =>{

        if(processive){

            let listeners = {
                message(channel , data){

                    resolve(data) ;
                },
                messageerror:{
                    fn(channel , message){

                        reject(message) ;
                    },
                    once:true
                }
            } ;

            add(channel , listeners) ;

            return listeners ;
        
        }else{

            let onMessageError = (channel , message) => reject(message) ;

            add(channel , {
                message:{
                    fn(channel , data){

                        resolve(data) ;

                        remove(channel , 'messageerror' , onMessageError) ;
                    }
                },
                messageerror:{
                    fn:onMessageError,
                    once:true
                }
            }) ;
        }

     } , processive ? listeners => remove(channel , listeners) : false),
     message:{
        id,
        from:fromAddress || rootAddress,
        to:address,
        params,
        reconnection,
        processive
    }
 } ;