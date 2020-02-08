
/**
 * 
 * 调试消息通道子进程
 * 
 * @import createChannel from data.message.channel.process.child
 * 
 */

let channel = createChannel({
    addresses:{
        single(name){

            console.log('收到信息' , name) ;

            return `${name} 是一名前端工程师` ;
        }
    }
}) ;