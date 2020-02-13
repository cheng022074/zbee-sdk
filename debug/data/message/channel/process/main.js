
/**
 * 
 * 调试消息通道主进程
 * 
 * @import createChannel from data.message.channel.process.main
 * 
 */

createChannel({
    rootAddress:'main1',
    concatenateChannels:createChannel({
        rootAddress:'main2',
        childProcess:fork('data.message.channel.process.client')
    }),
    childProcess:fork('data.message.channel.process.sdk')
}) ;
 