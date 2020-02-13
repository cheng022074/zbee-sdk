
/**
 * 
 * 调试消息通道主进程
 * 
 * @import createChannel from data.message.channel.process.main
 * 
 */

createChannel({
    rootAddress:'main1',
    childProcess:fork('data.message.channel.process.sdk')
}).concat(createChannel({
    rootAddress:'main2',
    childProcess:fork('data.message.channel.process.client')
})) ;
 