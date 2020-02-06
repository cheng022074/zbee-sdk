
/**
 * 
 * 调试消息通道子进程
 * 
 * @import createChannel from data.message.channel.process.child
 * 
 */

let channel = createChannel({
    addresses:{
        print(message){

            console.log('子进程' , message) ;
        }
    }
}) ;