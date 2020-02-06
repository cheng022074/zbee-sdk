
/**
 * 
 * 调试消息通道主进程
 * 
 * @import createChannel from data.message.channel.process.main
 * 
 */

 let channel = createChannel({
     childProcesses:fork('data.message.channel.process.child')
 }) ;

 channel.send('print' , '陈治文') ;