
/**
 * 
 * SDK
 * 
 * @import create from promise.create
 * 
 * @import createChannel from data.message.channel.process.child
 * 
 */

let channel = createChannel() ;

setTimeout(async() =>{

    console.log('开始') ;

    let result = await channel.send('single' , '陈治文') ;

    console.log('返回数据' , result) ;

} , 1000) ;