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
 * @param {boolean} [config.processive = false] 是否为持续消息
 * 
 */

 let me = this,
 {
    messages
 } = channel,
 id = generate('message-');

 return messages[id] = {
     promise:createPromise((resolve , reject) =>{

        if(processive){

            let listeners = {
                message(channel , data , message){

                    if(message.id === id){

                        resolve(data) ;
                    }

                    
                },
                messageerror:{
                    fn(channel , message){

                        if(message.id === id){

                            reject(message) ;
                        }
                        
                    },
                    once:true
                }
            } ;

            add(channel , listeners) ;

            return listeners ;
        
        }else{

            let onMessageError = (channel , message) => {

                if(message.id === id){

                    reject(message) ;

                    remove(channel , 'message' , onMessage) ;
                }
            },
            onMessage = (channel , data , message) =>{

                if(message.id === id){

                    resolve(data) ;

                    remove(channel , 'messageerror' , onMessageError) ;
                }
            };

            add(channel , {
                message:{
                    fn:onMessage,
                    once:true
                },
                messageerror:{
                    fn:onMessageError,
                    once:true
                }
            }) ;
        }

     } , processive ? listeners => remove(channel , listeners) : false),
     body:{
        id,
        from:fromAddress,
        to:address,
        params,
        reconnection,
        processive
    }
 } ;