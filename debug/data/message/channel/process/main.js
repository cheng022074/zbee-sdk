
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

 channel.send('single' , '陈治文').then((result) => console.log('返回信息' , result)) ;